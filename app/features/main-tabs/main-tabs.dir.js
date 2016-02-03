(function ()
{
    var module = angular.module('sampleDevice.feature.mainTabs');

    // Directive: sdev-main-tabs

    // Constructor
    var sdevMainTabs = function (sdevMainTabsConst)
    {
        return {
            restrict: 'EA',
            templateUrl: sdevMainTabsConst.templateUrl
        };
    };

    // Inject dependencies
    sdevMainTabs.$inject = ['sdevMainTabsConst'];

    // Include in module
    module.directive('sdevMainTabs', sdevMainTabs);

})();
