var app = angular.module('MyApp', []);
app.controller('myCtrl', function($scope) {
    // ruleid: detect-angular-element-methods
    var now = angular.element($scope.input).html();
    // ruleid: detect-angular-element-methods
    var now = angular.element($scope.input).append("foo");
    // ruleid: detect-angular-element-methods
    var now = angular.element($scope.input).prepend("foo");
    // ruleid: detect-angular-element-methods
    var now = angular.element($scope.input).wrap();

    var el = angular.element($scope.input);
    // ruleid: detect-angular-element-methods
    var now = el.html();

    return now;

});
