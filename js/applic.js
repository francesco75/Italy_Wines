var app = angular.module("buttonapp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "north.html"
    })
    .when("/center", {
        templateUrl : "center.html"
    })
    .when("/south", {
        templateUrl : "south.html"
    })
    
});