(function ()
{
    var module = angular.module('sampleDevice.feature.settings');

    // Class: SettingsCtrl 

    // Constructor (with variable declarations)
    var SettingsCtrl = function (sdevSettingsValue)
    {
        this.sdevSettingsValue = sdevSettingsValue;

        this.isSelected = false;
    };

    // Method: click()
    SettingsCtrl.prototype.click = function ()
    {
        this.isSelected = !this.isSelected;
    };

    // Method: selectDataDisplay(index)
    SettingsCtrl.prototype.selectDataDisplay = function (index)
    {
        this.sdevSettingsValue.selectedDataDisplay = index;
    };

    // Method: selectLoadingAnimation(index)
    SettingsCtrl.prototype.selectLoadingAnimation = function (index)
    {
        this.sdevSettingsValue.selectedLoadingAnimation = index;
    };

    // Method: dataDisplayIsSelected(index)
    SettingsCtrl.prototype.dataDisplayIsSelected = function (index)
    {
        return this.sdevSettingsValue.selectedDataDisplay === index;
    };

    // Method: loadingAnimationIsSelected(index)
    SettingsCtrl.prototype.loadingAnimationIsSelected = function (index)
    {
        return this.sdevSettingsValue.selectedLoadingAnimation === index;
    };
    
    // Inject dependencies
    SettingsCtrl.$inject = ['sdevSettingsValue'];

    // Include in module
    module.controller('SettingsCtrl', SettingsCtrl);

})();