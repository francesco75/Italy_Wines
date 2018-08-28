angular.module('App', ['ngRoute', 'RouteControllers']);
 
angular.module('App').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);  // Enable href routing without hashes
 
    
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        //controller: 'HomeController'
    })
    $routeProvider.when('/todo', {
        templateUrl: 'templates/product.html',
        //controller: 'HomeController'
    })
    $routeProvider.when('/todo1', {
        templateUrl: 'templates/grapes.html',
        //controller: 'HomeController'
    })
    .when('/accounts/register', {
        templateUrl: 'templates/register.html',
        //scontroller: 'RegisterController'
    });
});