(function ()
{
    var module = angular.module('sampleDevice.feature.settings');

    // Directive: sdev-settings

    // Constructor
    var sdevSettings = function (sdevSettingsConst)
    {
        return {
            restrict: 'EA',
            templateUrl: sdevSettingsConst.templateUrl
        };
    };

    // Inject dependencies
    sdevSettings.$inject = ['sdevSettingsConst'];

    // Include in module
    module.directive('sdevSettings', sdevSettings);

})();
