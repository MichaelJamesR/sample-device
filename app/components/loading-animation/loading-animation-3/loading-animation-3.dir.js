(function ()
{
    var module = angular.module('sampleDevice.component.loadingAnimation');

    // Directive: sdev-loading-animation-3

    // Constructor
    var sdevLoadingAnimation3 = function (sdevLoadingAnimationConst)
    {
        return {
            restrict: 'EA',
            scope: {},
            templateUrl: sdevLoadingAnimationConst.templateUrls.loadingAnimation3
        };
    };

    // Inject dependencies
    sdevLoadingAnimation3.$inject = ['sdevLoadingAnimationConst'];

    // Include in module
    module.directive('sdevLoadingAnimation3', sdevLoadingAnimation3);

})();
