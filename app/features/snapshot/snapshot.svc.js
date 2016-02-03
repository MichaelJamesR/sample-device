(function ()
{
    var module = angular.module('sampleDevice.feature.snapshot');

    // Service: sdevSnapshotSvc

    module.factory('sdevSnapshotSvc', ['$http', '$q', 'sdevSnapshotConst', 'filterFilter', function ($http, $q, sdevSnapshotConst, filterFilter)
    {
        this.filter = filterFilter;
        this.sdevSnapshotConst = sdevSnapshotConst;

        return {
            getFlatSnapshot: function ()
            {
                var deferred = $q.defer();

                // get live data using http request to url
                //var url = 'http://localhost:50001/api/flat-snapshot'; //TODO use an Angular Constant for the first part of this URL. or a Value.
                //$http.get(url)
                //.success(function (data)
                //{
                //    deferred.resolve(data);
                //})
                //.error(function (msg, code)
                //{
                //    var errorPayload = { 'url': url };
                //    if (msg)
                //    {
                //        errorPayload.message = msg;
                //    }
                //    if (code)
                //    {
                //        errorPayload.status_code = code;
                //    }
                //    deferred.reject(errorPayload);
                //});

                // get static sample data from local sample file
                deferred.resolve(sdevSnapshotConst.templateUrls.sampleFlatData);

                return deferred.promise;
            },
            getTieredSnapshot: function ()
            {
                var deferred = $q.defer();

                // get live data using http request to url
                //var url = 'http://localhost:50001/api/tiered-snapshot';
                //$http.get(url)
                //.success(function (data)
                //{
                //    deferred.resolve(data);
                //})
                //.error(function (msg, code)
                //{
                //    var errorPayload = { 'url': url };
                //    if (msg)
                //    {
                //        errorPayload.message = msg;
                //    }
                //    if (code)
                //    {
                //        errorPayload.status_code = code;
                //    }
                //    deferred.reject(errorPayload);
                //});

                // get static sample data from local sample file
                deferred.resolve(sdevSnapshotConst.templateUrls.sampleTieredData);

                return deferred.promise;
            },
            getHistory: function (path)
            {
                var deferred = $q.defer();

                // get live data using http request to url
                //var url = 'http://localhost:50001/api/history';
                //$http.defaults.headers.post['Content-Type'] = 'application/json';
                //$http.post(url, { 'path': path })
                //.success(function (data)
                //{
                //    deferred.resolve(data);
                //})
                //.error(function (msg, code)
                //{
                //    var errorPayload = { 'url': url, 'path': path };
                //    if (msg)
                //    {
                //        errorPayload.message = msg;
                //    }
                //    if (code)
                //    {
                //        errorPayload.status_code = code;
                //    }
                //    deferred.reject(errorPayload);
                //});

                // get static sample data from local sample file
                var matchingDevice = this.filter(sdevSnapshotConst.templateUrls.sampleHistory, { 'path': path });
                deferred.resolve(matchingDevice.history);

                return deferred.promise;
            }
        };
    }]);

})();