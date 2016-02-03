(function ()
{
    var module = angular.module('sampleDevice.component.loadingAnimation');

    // Directive: sdev-loading-animation-8

    // Constructor
    var sdevLoadingAnimation8 = function (sdevLoadingAnimationConst)
    {
        return {
            restrict: 'EA',
            scope: {},
            templateUrl: sdevLoadingAnimationConst.templateUrls.loadingAnimation8
        };
    };

    // Inject dependencies
    sdevLoadingAnimation8.$inject = ['sdevLoadingAnimationConst'];

    // Include in module
    module.directive('sdevLoadingAnimation8', sdevLoadingAnimation8);

})();
