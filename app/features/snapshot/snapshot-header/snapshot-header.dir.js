(function ()
{
    var module = angular.module('sampleDevice.feature.snapshot');

    // Directive: sdev-snapshot-header

    // Constructor
    var sdevSnapshotHeader = function (sdevSnapshotConst)
    {
        return {
            restrict: 'EA',
            templateUrl: sdevSnapshotConst.templateUrls.snapshotHeader
        };
    };

    // Inject dependencies
    sdevSnapshotHeader.$inject = ['sdevSnapshotConst'];

    // Include in module
    module.directive('sdevSnapshotHeader', sdevSnapshotHeader);

})();