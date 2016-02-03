(function ()
{
    var module = angular.module('sampleDevice.feature.snapshot');

    // Class: SnapshotTieredCtrl 

    // Constructor (with variable declarations)
    var SnapshotTieredCtrl = function (sdevSnapshotSvc, sdevSnapshotConst)
    {
        this.sdevSnapshotSvc = sdevSnapshotSvc;
        this.sdevSnapshotConst = sdevSnapshotConst;

        this.dataType = sdevSnapshotConst.dataType.tiered;
        this.data = [];
        this.dataHasLoaded = false;
        this.httpError = null;

        this.selectedItem = null;
        this.historyStack = [];

        this.searchFilter = '';
        this.addItemFormShown = false;

        this.statusSelection = {
            loading: {
                'class': 'alert-info',
                message: 'Loading...'
            },
            nodata: {
                'class': 'alert-warning',
                message: 'No items found.'
            },
            nomatch: {
                'class': 'alert-warning',
                messageBold: 'No items found. ',
                message: 'Please modify search.'
            },
            error: {
                'class': 'alert-danger',
                messageBold: 'Error loading data. ',
                message: 'See console for details.'
            }
        };

        var _this = this; //necessary for use inside promise object's success and error functions
        sdevSnapshotSvc.getTieredSnapshot().then(
            function (successPayload)
            {
                _this.httpError = null;
                _this.data = successPayload;
                _this.selectedItem = {
                    'path': '',
                    'children': _this.data
                };
                _this.dataHasLoaded = true;
            },
            function (errorPayload)
            {
                _this.httpError = errorPayload;
                _this.dataHasLoaded = true;
            });
    };

    // Method: getStatus()
    SnapshotTieredCtrl.prototype.getStatus = function ()
    {
        if (!this.dataHasLoaded)
        {
            return this.statusSelection.loading;
        }
        else if (this.httpError)
        {
            return this.statusSelection.error;
        }
        else if (!this.data.length)
        {
            return this.statusSelection.nodata;
        }
        //else if (!$scope.filteredData.length)
        //{
        //    return this.statusSelection.nomatch;
        //}
        else
        {
            return null;
        }
    };

    // Method: toggleAddItemForm()
    SnapshotTieredCtrl.prototype.toggleAddItemForm = function ()
    {
        this.addItemFormShown = !this.addItemFormShown;
    };

    // Method: select(item)
    SnapshotTieredCtrl.prototype.select = function (item)
    {
        this.historyStack.push(this.selectedItem);
        this.selectedItem = item;
    };

    // Method: back()
    SnapshotTieredCtrl.prototype.back = function ()
    {
        this.selectedItem = this.historyStack.pop();
    };

    // Method: isSelected(item)
    SnapshotTieredCtrl.prototype.isSelected = function (item)
    {
        if (item)
        {
            return this.selectedItem.path === item.path;
        }
        else
        {
            return false;
        }
    };

    // Method: getName(item)
    SnapshotTieredCtrl.prototype.getName = function (item)
    {
        if (item)
        {
            if (!item.name)
            {
                item.name = item.path.substring(item.path.lastIndexOf('\\') + 1, item.path.length);
            }
            return item.name;
        }
    };

    // Method: hasReading(item)
    SnapshotTieredCtrl.prototype.hasReading = function (item)
    {
        return (item && item.reading);
    };

    // Method: getReadingDetails(item)
    SnapshotTieredCtrl.prototype.getReadingDetails = function (item)
    {
        if (this.hasReading(item))
        {
            return this.getDisplayedValue(item) + ' at ' + this.getDisplayedTime(item);
        }

        var latestReading = this.findLatestReadingRecursive(item);
        if (latestReading !== '')
        {
            return 'Latest reading at ' + this.prettifyTimestamp(latestReading);
        }

        return '';
    };

    // Method: findLatestReadingRecursive(item)
    SnapshotTieredCtrl.prototype.findLatestReadingRecursive = function (item)
    {
        if (item)
        {
            if (this.hasReading(item))
            {
                return item.reading.timestamp;
            }

            if (item.children && item.children.length)
            {
                var maxTimestamp = '';
                for (var i = 0; i < item.children.length; i++)
                {
                    var timestamp = this.findLatestReadingRecursive(item.children[i]);
                    if (maxTimestamp < timestamp)
                    {
                        maxTimestamp = timestamp;
                    }
                }

                return maxTimestamp;
            }
        }

        return '';
    };

    // Method: getDisplayedValue(item)
    SnapshotTieredCtrl.prototype.getDisplayedValue = function (item)
    {
        if (this.hasReading(item))
        {
            if (item.reading.displayed_value)
            {
                return item.reading.displayed_value;
            }

            if (item.reading.value)
            {
                return item.reading.value;
            }

            return 'null';
        }

        return 'No reading';
    };

    // Method: getDisplayedTime(item)
    SnapshotTieredCtrl.prototype.getDisplayedTime = function (item)
    {
        if (this.hasReading(item))
        {
            if (item.reading.timestamp)
            {
                if (!item.reading.displayed_time)
                {
                    item.reading.displayed_time = this.prettifyTimestamp(item.reading.timestamp);
                }
                return item.reading.displayed_time;
            }

            return 'Unknown';
        }

        return 'No reading';
    };

    // Method: prettifyTimestamp(item)
    SnapshotTieredCtrl.prototype.prettifyTimestamp = function (item)
    {
        return moment(timestamp, moment.ISO_8601).format("YYYY-MM-DD hh:mm:ss a Z");
    };

    // Inject dependencies
    SnapshotTieredCtrl.$inject = ['sdevSnapshotSvc', 'sdevSnapshotConst'];

    // Include in module
    module.controller('SnapshotTieredCtrl', SnapshotTieredCtrl);

})();