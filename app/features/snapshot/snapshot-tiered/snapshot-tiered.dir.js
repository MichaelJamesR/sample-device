(function ()
{
    var module = angular.module('sampleDevice.feature.snapshot');

    // Directive: sdev-snapshot-tiered

    // Constructor
    var sdevSnapshotTiered = function (sdevSnapshotConst)
    {
        return {
            restrict: 'EA',
            templateUrl: sdevSnapshotConst.templateUrls.snapshotTiered
        };
    };

    // Inject dependencies
    sdevSnapshotTiered.$inject = ['sdevSnapshotConst'];

    // Include in module
    module.directive('sdevSnapshotTiered', sdevSnapshotTiered);

})();