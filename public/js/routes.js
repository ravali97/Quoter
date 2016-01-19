var app = angular.module("myApp", ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
        .when('/about', {
            controller: 'myCtrl',
            templateUrl: '/views/about.html'
        })
        .when('/contact', {
            controller: 'myCtrl',
            templateUrl: '/views/contact.html'
        })
        .when('/landing', {
            controller: 'myCtrl',
            templateUrl: '/views/landing.html'
        })
        .otherwise({
            redirectTo: '/landing'
        });

});
app.controller("myCtrl", function($scope) {
    $scope.name = "";
});
