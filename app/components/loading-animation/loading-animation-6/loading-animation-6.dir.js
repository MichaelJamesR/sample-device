(function ()
{
    var module = angular.module('sampleDevice.component.loadingAnimation');

    // Directive: sdev-loading-animation-6

    // Constructor
    var sdevLoadingAnimation6 = function (sdevLoadingAnimationConst)
    {
        return {
            restrict: 'EA',
            scope: {},
            templateUrl: sdevLoadingAnimationConst.templateUrls.loadingAnimation6
        };
    };

    // Inject dependencies
    sdevLoadingAnimation6.$inject = ['sdevLoadingAnimationConst'];

    // Include in module
    module.directive('sdevLoadingAnimation6', sdevLoadingAnimation6);

})();
