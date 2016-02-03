(function ()
{
    var module = angular.module('sampleDevice.feature.snapshot');

    // Directive: sdev-snapshot-device

    // Constructor
    var sdevSnapshotDevice = function (sdevSnapshotConst)
    {
        return {
            restrict: 'EA',
            templateUrl: sdevSnapshotConst.templateUrls.snapshotDevice
        };
    };

    // Inject dependencies
    sdevSnapshotDevice.$inject = ['sdevSnapshotConst'];

    // Include in module
    module.directive('sdevSnapshotDevice', sdevSnapshotDevice);

})();