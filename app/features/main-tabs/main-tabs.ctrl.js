(function ()
{
    var module = angular.module('sampleDevice.feature.mainTabs');

    // Class: MainTabsCtrl 

    // Constructor (with variable declarations)
    var MainTabsCtrl = function (sdevSettingsValue)
    {
        this.sdevSettingsValue = sdevSettingsValue;

        this.selectedIndex = 1;
    };

    // Method: select(index)
    MainTabsCtrl.prototype.select = function (index)
    {
        this.selectedIndex = index;
    };

    // Method: isSelected(index)
    MainTabsCtrl.prototype.isSelected = function (index)
    {
        return this.selectedIndex === index;
    };

    // Method: dataDisplayIsSelected(index)
    MainTabsCtrl.prototype.dataDisplayIsSelected = function (index)
    {
        return this.sdevSettingsValue.selectedDataDisplay === index;
    };

    // Method: loadingAnimationIsSelected(index)
    MainTabsCtrl.prototype.loadingAnimationIsSelected = function (index)
    {
        return this.sdevSettingsValue.selectedLoadingAnimation === index;
    };

    // Inject dependencies
    MainTabsCtrl.$inject = ['sdevSettingsValue'];

    // Include in module
    module.controller('MainTabsCtrl', MainTabsCtrl);

})();