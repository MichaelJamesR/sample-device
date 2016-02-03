(function ()
{
    var module = angular.module('sampleDevice.component.loadingAnimation');

    // Directive: sdev-loading-animation
    
    // Constructor
    var sdevLoadingAnimation = function (sdevLoadingAnimationConst)
    {
        return {
            restrict: 'EA',
            scope: {
                animationIndex: "=?" // optional, defaults to latest. index may be specified as attribute.  example: <sdev-loading-animation animation-index="6"></sdev-loading-animation>
            },
            templateUrl: sdevLoadingAnimationConst.templateUrls.loadingAnimation
        };
    };

    // Inject dependencies
    sdevLoadingAnimation.$inject = ['sdevLoadingAnimationConst'];

    // Include in module
    module.directive('sdevLoadingAnimation', sdevLoadingAnimation);

})();
