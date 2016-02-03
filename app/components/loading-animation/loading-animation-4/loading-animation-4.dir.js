(function ()
{
    var module = angular.module('sampleDevice.component.loadingAnimation');

    // Directive: sdev-loading-animation-4

    // Constructor
    var sdevLoadingAnimation4 = function (sdevLoadingAnimationConst)
    {
        return {
            restrict: 'EA',
            scope: {},
            templateUrl: sdevLoadingAnimationConst.templateUrls.loadingAnimation4
        };
    };

    // Inject dependencies
    sdevLoadingAnimation4.$inject = ['sdevLoadingAnimationConst'];

    // Include in module
    module.directive('sdevLoadingAnimation4', sdevLoadingAnimation4);

})();
