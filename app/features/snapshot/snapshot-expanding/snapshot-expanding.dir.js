(function ()
{
    var module = angular.module('sampleDevice.feature.snapshot');

    // Directive: sdev-snapshot-expanding

    // Constructor
    var sdevSnapshotExpanding = function (sdevSnapshotConst)
    {
        return {
            restrict: 'EA',
            templateUrl: sdevSnapshotConst.templateUrls.snapshotExpanding
        };
    };

    // Inject dependencies
    sdevSnapshotExpanding.$inject = ['sdevSnapshotConst'];

    // Include in module
    module.directive('sdevSnapshotExpanding', sdevSnapshotExpanding);

})();