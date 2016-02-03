# AngularJS Best Practices and Style Guide

## Resources

* The [Official AngularJS Developer Guide][ref1] is a great resource for overviews,
    tutorials, in-depth concepts, and additional external content.
* [Grumpy Wizards' AngularJS Best Practices][ref2] is a great, concise detailing of some
    key best practices.
* [Grumpy Wizards' ngTemplate][ref3] is an AngularJS app directory structure template,
    providing an example and some further detail to the app structure described in their
    Best Practices.
* [Google's Angular Best Practice for App Structure][ref4] is also a good reference for
    well-structured apps.
* [Google's AngularJS Style Guide][ref5] contains some relevant guidelines, mainly about
    class-like controller definitions, though the styles dependent on Closure largely 
    don't apply.

[ref1]: https://docs.angularjs.org/guide
[ref2]: http://grumpywizards.com/angular/
[ref3]: https://github.com/GrumpyWizards/ngTemplate
[ref4]: https://docs.google.com/document/d/1XXMvReO8-Awi1EZXAXS4PzDzdNvV6pGcuaF4Q9821Es/pub
[ref5]: https://google-styleguide.googlecode.com/svn/trunk/angularjs-google-style.html

## General

* Keep your app logically separated by feature. Create different modules and directives 
    for each feature and build them to be as separated from your app as possible. Modules
    that can be made completely separate from your app are components. In other words,
    features are more closely tied to your app (often dependent on other modules in your
    app) whereas components are stand-alone modules that could easily be pulled into and
    used in any app (often using directives with [isolate scope][gen1] and attribute 
    bindings).

[gen1]: https://docs.angularjs.org/guide/directive#isolating-the-scope-of-a-directive

## Directives

* A [directive][dir1] should be regarded as a single construct within your view that 
    abstracts away the many related constructs within it.
* All custom directives are recommended to have the `restrict: 'EA'` property. This lets
    them be used as custom elements and as custom attributes to existing elements.
* Use a directive as an attribute of an existing element if the directive is meant to 
    modify the behavior of the element (e.g. `<div my-directive class="content"></div>`).
    This has the added benefit of not affecting any existing CSS styling on that element.
* Use a directive as an element if the directive is meant to define a new element with
    new behavior (e.g. `<my-directive></my-directive>`).

[dir1]: https://docs.angularjs.org/guide/directive

## Controllers

* A [controller][ctrl1] and its alias should be regarded as a class and its instance,
    respectively.
* A controller should only contain UI logic - no business logic. This improves overall
    separation of concerns and, in turn, testability.
* Each controller should reside entirely within one controller file (e.g. 
    feature-name.ctrl.js) and should be the only controller within that file.
* The controller definition should follow a standard format:

    1. Retrieve the module this controller will belong to (akin to the namespace of a 
        class).

            var module = angular.module('orgname.appname.feature.featureName');

    2. Declare the constructor function (the variable name should be the name of the
        controller), specify all injected dependencies of the controller as function
        parameters, and declare and initialize all controller fields as properties of
        `this` (including relevant function parameters so they may be accessed outside
        the constructor). Avoid assigning values to `$scope`, as this tends to inhibit
        building clean, readable code (though reading values from `$scope` is usually
        fine and is sometimes the best method for accessing certain information).

            var FeatureNameCtrl = function ($scope, orgappprefixFeatureNameSvc)
            {
                this.orgappprefixFeatureNameSvc = orgappprefixFeatureNameSvc;
                this.selectedIndex = $scope.initialIndex;
                this.contents = '';
            };

    3. Declare any methods as properties of the controller's `prototype` property
        (following [Google's JavaScript Style Guide][ctrl2]).

            FeatureNameCtrl.prototype.isSelected = function (index)
            {
                return (this.selectedIndex === index);
            };

    4. Use `var _this` when calling a service method and coding logic into its promise
        object's success and error functions.

            FeatureNameCtrl.prototype.select = function (index)
            {
                var _this = this;
                this.orgappprefixFeatureNameSvc.getFeatureNameContents(index).then(
                    function (successPayload)
                    {
                        _this.contents = successPayload;
                    },
                    function (errorPayload)
                    {
                        _this.contents = '';
                        console.log('Error retrieving Feature Name contents: ' + errorPayload);
                    });
                this.selectedIndex = index;
            };

    5. Inject all dependencies of the controller using the `$inject` property. This 
        method of explicit dependency injection will allow AngularJS to identify the
        dependencies even if the file is minified.

            FeatureNameCtrl.$inject = ['$scope', 'orgappprefixFeatureNameSvc'];

    6. Finally, add the controller to the module passing in the controller name and the
        constructor function.

            module.controller('FeatureNameCtrl', FeatureNameCtrl);

[ctrl1]: https://docs.angularjs.org/guide/controller
[ctrl2]: http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml?showone=Method_and_property_definitions#Method_and_property_definitions

## Services

* A service should only contain business logic - no UI logic. This improves overall
    separation of concerns and, in turn, testability.

