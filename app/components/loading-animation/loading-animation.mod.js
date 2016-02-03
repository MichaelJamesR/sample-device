(function ()
{
    var module = angular.module('sampleDevice.component.loadingAnimation', ['sampleDevice.component.svgAnimation']);

    // one constant dictionary per module to keep it clean and verbose
    module.constant('sdevLoadingAnimationConst', {
        templateUrls: {
            loadingAnimation: 'components/loading-animation/loading-animation.tpl.html',
            loadingAnimation1: 'components/loading-animation/loading-animation-1/loading-animation-1.tpl.html',
            loadingAnimation2: 'components/loading-animation/loading-animation-2/loading-animation-2.tpl.html',
            loadingAnimation3: 'components/loading-animation/loading-animation-3/loading-animation-3.tpl.html',
            loadingAnimation4: 'components/loading-animation/loading-animation-4/loading-animation-4.tpl.html',
            loadingAnimation5: 'components/loading-animation/loading-animation-5/loading-animation-5.tpl.html',
            loadingAnimation6: 'components/loading-animation/loading-animation-6/loading-animation-6.tpl.html',
            loadingAnimation7: 'components/loading-animation/loading-animation-7/loading-animation-7.tpl.html',
            loadingAnimation8: 'components/loading-animation/loading-animation-8/loading-animation-8.tpl.html'
        }
    });

})();