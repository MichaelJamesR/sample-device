(function ()
{
    var module = angular.module('sampleDevice.feature.snapshot');

    // Directive: sdev-snapshot-flat

    // Constructor
    var sdevSnapshotFlat = function (sdevSnapshotConst)
    {
        return {
            restrict: 'EA',
            templateUrl: sdevSnapshotConst.templateUrls.snapshotFlat
        };
    };

    // Inject dependencies
    sdevSnapshotFlat.$inject = ['sdevSnapshotConst'];

    // Include in module
    module.directive('sdevSnapshotFlat', sdevSnapshotFlat);

})();