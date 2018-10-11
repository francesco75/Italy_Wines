angular.module('App', ['ngRoute', 'RouteControllers','UserService']);
 
angular.module('App').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);  // Enable href routing without hashes


     


    $routeProvider.when('/', {
        templateUrl: 'templates/north.html',
        controller: 'HomeController',
        
    
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
                controller: 'RegisterController',
                templateUrl: 'templates/register.html',
                
            })
    .when("/center", {
        templateUrl : "templates/center.html"
    })
    .when("/south", {
        templateUrl : "templates/south.html"
    })
        .when("/island", {
        templateUrl : "templates/islands.html"
    })
         .when("/gal1", {
        templateUrl : "templates/galnorth1.html"
    })

     $routeProvider.when('/login', {
        templateUrl: 'templates/login.html',
        controller: 'LoginrController',
        
        

    })
            
});