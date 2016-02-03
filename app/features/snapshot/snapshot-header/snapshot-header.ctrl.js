(function ()
{
    var module = angular.module('sampleDevice.feature.snapshot');

    // Class: SnapshotHeaderCtrl 

    // Constructor (with variable declarations)
    var SnapshotHeaderCtrl = function (sdevSettingsValue)
    {
        this.sdevSettingsValue = sdevSettingsValue;
    };

    // Method: getSelectedLoadingAnimation()
    SnapshotHeaderCtrl.prototype.getSelectedLoadingAnimation = function ()
    {
        return this.sdevSettingsValue.selectedLoadingAnimation;
    };

    // Inject dependencies
    SnapshotHeaderCtrl.$inject = ['sdevSettingsValue'];

    // Include in module
    module.controller('SnapshotHeaderCtrl', SnapshotHeaderCtrl);

})();