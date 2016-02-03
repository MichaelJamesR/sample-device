(function ()
{
    var module = angular.module('sampleDevice.feature.snapshot');

    // Class: SnapshotDeviceCtrl

    // Constructor (with variable declarations)
    var SnapshotDeviceCtrl = function ($scope, sdevSnapshotSvc, sdevSnapshotConst, sdevSettingsValue)
    {
        this.sdevSnapshotSvc = sdevSnapshotSvc;
        this.sdevSnapshotConst = sdevSnapshotConst;
        this.sdevSettingsValue = sdevSettingsValue;

        this.path = $scope.deviceData.path;
        this.pathEscaped = this.path.replace(/([ .*+?^=!:${}()|\[\]\/\\])/g, '-');
        this.name = this.path.substring(this.path.lastIndexOf('\\') + 1, this.path.length);
        if ($scope.snapshot.dataType === sdevSnapshotConst.dataType.expanding)
        {
            this.displayedTitle = this.name;
        }
        else
        {
            this.displayedTitle = this.path;
        }
        this.reading = $scope.deviceData.reading;
        if (this.reading && this.reading.timestamp)
        {
            this.reading.displayed_time = moment(this.reading.timestamp, moment.ISO_8601).format("YYYY-MM-DD hh:mm:ss a Z");
        }
        this.meta = $scope.deviceData.meta;
        this.children = $scope.deviceData.children;

        this.isSelected = false;
        this.hasBeenSelected = false;
        this.history = [];
        this.historyIsLoading = false;
        this.historyHasLoaded = false;
        this.graph;
        this.graphId = 'graph-' + this.pathEscaped;
        this.legendId = 'legend-' + this.pathEscaped;
    };

    // Method: hasReading()
    SnapshotDeviceCtrl.prototype.hasReading = function ()
    {
        return (this.reading && true);
    };

    // Method: hasHistoryData()
    SnapshotDeviceCtrl.prototype.hasHistoryData = function ()
    {
        return (this.history && this.history.length > 0);
    };

    // Method: getReadingDetails()
    SnapshotDeviceCtrl.prototype.getReadingDetails = function ()
    {
        if (this.hasReading())
        {
            return this.getDisplayedValue() + ' at ' + this.getDisplayedTime();
        }
        return null;
    };

    // Method: getDisplayedValue()
    SnapshotDeviceCtrl.prototype.getDisplayedValue = function ()
    {
        if (this.hasReading())
        {
            if (this.reading.displayed_value)
            {
                return this.reading.displayed_value;
            }

            if (this.reading.value)
            {
                return this.reading.value;
            }

            return 'null';
        }
        return 'No reading';
    };

    // Method: getDisplayedTime()
    SnapshotDeviceCtrl.prototype.getDisplayedTime = function ()
    {
        if (this.hasReading())
        {
            if (this.reading.displayed_time)
            {
                return this.reading.displayed_time;
            }

            if (this.reading.timestamp)
            {
                return this.reading.timestamp;
            }

            return 'Unknown';
        }
        return 'No reading';
    };

    // Method: click()
    SnapshotDeviceCtrl.prototype.click = function ()
    {
        this.hasBeenSelected = true;
        this.isSelected = !this.isSelected;

        if (this.isSelected && !this.historyHasLoaded)
        {
            this.refreshHistory();
        }
    };

    // Method: refreshHistory()
    SnapshotDeviceCtrl.prototype.refreshHistory = function ()
    {
        if (this.hasReading()) // if it doesnt have a reading, it wont have history
        {
            this.historyIsLoading = true;

            var _this = this;
            _this.sdevSnapshotSvc.getHistory(_this.path).then(
                function (successPayload)
                {
                    //console.table(successPayload);
                    _this.history = successPayload;
                    _this.historyIsLoading = false;
                    _this.historyHasLoaded = true;
                    _this.loadGraph();
                },
                function (errorPayload)
                {
                    _this.historyIsLoading = false;
                    _this.historyHasLoaded = true;
                });
        }
    };

    // Method: loadGraph()
    SnapshotDeviceCtrl.prototype.loadGraph = function ()
    {
        this.graph = new Rickshaw.Graph(this.getGraphParams(this.history));

        this.graph.render();

        var hoverDetail = new Rickshaw.Graph.HoverDetail({
            graph: this.graph
        });

        //var legend = new Rickshaw.Graph.Legend({
        //    graph: this.graph,
        //    element: document.getElementById(this.legendId)
        //});

        //var shelving = new Rickshaw.Graph.Behavior.Series.Toggle({
        //    graph: this.graph,
        //    legend: legend
        //});

        var axes = new Rickshaw.Graph.Axis.Time({
            graph: this.graph
        });
        axes.render();
    };

    // Method: getGraphParams(historyData)
    SnapshotDeviceCtrl.prototype.getGraphParams = function (historyData)
    {
        //slight hack: if last reading is before current time...
        if (moment(historyData[historyData.length - 1].timestamp, moment.ISO_8601).unix() < moment().unix())
        {
            //... force graph to draw last reading's line out to current time by adding extra data point
            historyData.push({
                'timestamp': moment().format(),
                'value': historyData[historyData.length - 1].value
            });
        }

        var graphData = [];
        for (var i = 0; i < historyData.length; i++)
        {
            graphData.push({
                'x': moment(historyData[i].timestamp, moment.ISO_8601).unix(),
                'y': historyData[i].value
            });
        }

        return {
            element: document.getElementById(this.graphId),
            width: 380,
            height: 200,
            min: 'auto',
            padding: {
                top: 0.25,
                bottom: 0.15
            },
            renderer: 'line',
            interpolation: 'step-after',
            series: [
                {
                    name: this.name,
                    data: graphData,
                    color: '#008b45'
                }
            ]
        };
    };

    // Method: getSelectedLoadingAnimation()
    SnapshotDeviceCtrl.prototype.getSelectedLoadingAnimation = function ()
    {
        return this.sdevSettingsValue.selectedLoadingAnimation;
    };

    // Inject dependencies
    SnapshotDeviceCtrl.$inject = ['$scope', 'sdevSnapshotSvc', 'sdevSnapshotConst', 'sdevSettingsValue'];

    // Include in module
    module.controller('SnapshotDeviceCtrl', SnapshotDeviceCtrl);

})();