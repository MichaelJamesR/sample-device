(function ()
{
    var module = angular.module('sampleDevice.feature.snapshot');

    // Class: SnapshotFlatCtrl 

    // Constructor (with variable declarations)
    var SnapshotFlatCtrl = function (filterFilter, sdevSnapshotSvc, sdevSnapshotConst)
    {
        this.filter = filterFilter;
        this.sdevSnapshotSvc = sdevSnapshotSvc;
        this.sdevSnapshotConst = sdevSnapshotConst;

        this.dataType = sdevSnapshotConst.dataType.flat;
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
        sdevSnapshotSvc.getFlatSnapshot().then(
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

    // Method: getFilteredData()
    SnapshotFlatCtrl.prototype.getFilteredData = function ()
    {
        return this.filter(this.data, { path: this.searchFilter });
    };

    // Method: getStatus()
    SnapshotFlatCtrl.prototype.getStatus = function ()
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
        else if (!this.getFilteredData().length)
        {
            return this.statusSelection.nomatch;
        }
        else
        {
            return null;
        }
    };
    
    // Method: hasStatus()
    SnapshotFlatCtrl.prototype.hasStatus = function ()
    {
        return (this.getStatus() !== null);
    };
        
    // Method: statusIsLoading()
    SnapshotFlatCtrl.prototype.statusIsLoading = function ()
    {
        return (this.getStatus() === this.statusSelection.loading);
    };
        
    // Method: toggleAddItemForm()
    SnapshotFlatCtrl.prototype.toggleAddItemForm = function ()
    {
        this.addItemFormShown = !this.addItemFormShown;
    };

    // Inject dependencies
    SnapshotFlatCtrl.$inject = ['filterFilter', 'sdevSnapshotSvc', 'sdevSnapshotConst'];

    // Include in module
    module.controller('SnapshotFlatCtrl', SnapshotFlatCtrl);

})();