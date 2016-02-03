(function ()
{
    var module = angular.module('sampleDevice.feature.snapshot');

    // Class: SnapshotExpandingCtrl 

    // Constructor (with variable declarations)
    var SnapshotExpandingCtrl = function (sdevSnapshotSvc, sdevSnapshotConst)
    {
        this.sdevSnapshotSvc = sdevSnapshotSvc;
        this.sdevSnapshotConst = sdevSnapshotConst;

        this.dataType = sdevSnapshotConst.dataType.expanding;
        this.data = [];
        this.dataHasLoaded = false;
        this.httpError = null;

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
                _this.dataHasLoaded = true;
            },
            function (errorPayload)
            {
                _this.httpError = errorPayload;
                _this.dataHasLoaded = true;
            });
    };

    // Method: getStatus()
    SnapshotExpandingCtrl.prototype.getStatus = function ()
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

    // Method: hasStatus()
    SnapshotExpandingCtrl.prototype.hasStatus = function ()
    {
        return (this.getStatus() !== null);
    };

    // Method: statusIsLoading()
    SnapshotExpandingCtrl.prototype.statusIsLoading = function ()
    {
        return (this.getStatus() === this.statusSelection.loading);
    };

    // Method: toggleAddItemForm()
    SnapshotExpandingCtrl.prototype.toggleAddItemForm = function ()
    {
        this.addItemFormShown = !this.addItemFormShown;
    };

    // Inject dependencies
    SnapshotExpandingCtrl.$inject = ['sdevSnapshotSvc', 'sdevSnapshotConst'];

    // Include in module
    module.controller('SnapshotExpandingCtrl', SnapshotExpandingCtrl);

})();