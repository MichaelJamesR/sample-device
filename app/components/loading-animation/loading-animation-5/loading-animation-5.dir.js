(function ()
{
    var module = angular.module('sampleDevice.component.loadingAnimation');

    // Directive: sdev-loading-animation-5

    // Constructor
    var sdevLoadingAnimation5 = function (sdevLoadingAnimationConst)
    {
        return {
            restrict: 'EA',
            scope: {},
            templateUrl: sdevLoadingAnimationConst.templateUrls.loadingAnimation5
        };
    };

    // Inject dependencies
    sdevLoadingAnimation5.$inject = ['sdevLoadingAnimationConst'];

    // Include in module
    module.directive('sdevLoadingAnimation5', sdevLoadingAnimation5);

})();
