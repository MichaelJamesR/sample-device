(function ()
{
    var module = angular.module('sampleDevice.feature.settings', []);

    // one constant dictionary per module to keep it clean and verbose
    module.constant('sdevSettingsConst', {
        templateUrl: 'features/settings/settings.tpl.html'
    });

    // one value dictionary for settings since it makes sense
    module.value('sdevSettingsValue', {
        selectedDataDisplay: 1,
        selectedLoadingAnimation: 8
    });

})();