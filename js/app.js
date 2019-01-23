angular.module('App', ['ngRoute', 'RouteControllers','UserService']);
 
angular.module('App').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);  // Enable href routing without hashes
    

     


    $routeProvider.when('/', {
        templateUrl: 'templates/north.html',
        controller: 'HomeController',
        
    
    })
    $routeProvider.when('/todo', {
        templateUrl: 'templates/product.html',
        controller: 'HomeController'
    })
    $routeProvider.when('/todo1', {
        templateUrl: 'templates/grapes.html',
        controller: 'HomeController'
    })
    
    .when('/accounts/register', {
                templateUrl: 'templates/register.html',
                controller: 'RegisterController',
                
            })
    .when('/login', {
                templateUrl: 'templates/login.html',
                controller: 'loginController',
                
            })


    
    .when("/center", {
        templateUrl : "templates/center.html",
        controller: 'HomeController',
    })
    .when("/south", {
        templateUrl : "templates/south.html",
        controller: 'HomeController',
    })
        .when("/island", {
        templateUrl : "templates/islands.html",
        controller: 'HomeController',
    })
         .when("/gal1", {
        templateUrl : "templates/galnorth1.html",
        controller: 'HomeController',
    })
         .when("/gal3", {
        templateUrl : "templates/galnorth2.html",
        controller: 'HomeController',
    })
         .when("/gal2", {
        templateUrl : "templates/galcenter1.html",
        controller: 'HomeController',
    })
         .when("/gal4", {
        templateUrl : "templates/galnorth3.html",
        controller: 'HomeController',
    })
         
       .when("/test", {
        templateUrl : "templates/quiz.html",
        controller: 'HomeController',
    })
    

     
            
});