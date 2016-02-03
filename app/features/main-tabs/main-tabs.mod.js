(function ()
{
    var module = angular.module('sampleDevice.feature.mainTabs', ['sampleDevice.feature.snapshot', 'sampleDevice.feature.settings']);

    // one constant dictionary per module to keep it clean and verbose
    module.constant('sdevMainTabsConst', {
        templateUrl: 'features/main-tabs/main-tabs.tpl.html'
    });

})();