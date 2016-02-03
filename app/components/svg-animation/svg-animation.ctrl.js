(function ()
{
    var module = angular.module('sampleDevice.component.svgAnimation');

    // Class: SvgAnimationCtrl 

    // Constructor (with variable declarations)
    var SvgAnimationCtrl = function ($scope)
    {
        $scope.svgAnimationId = 'SVG-animation-' + leverone.uuid(); // TODO require uuid library/function more formally
    };

    // Inject dependencies
    SvgAnimationCtrl.$inject = ['$scope'];

    // Include in module
    module.controller('SvgAnimationCtrl', SvgAnimationCtrl);

})();