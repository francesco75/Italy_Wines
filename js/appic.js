(function () {
    'use strict';

    angular
        .module('App',['ngRoute', 'ngCookies'])
        .config(config)
        .run(run);

    config.$inject = ['$routeProvider', '$locationProvider'];
    function config($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);  // Enable hashed //
        $routeProvider
           .when('/', {
             controller: 'HomController', 
             templateUrl: 'templates/north.html',
           
         })
           .when('/north', {
             controller: 'HomController', 
             templateUrl: 'templates/north.html',
           
         })
        .when('/center', {
        controller: 'HomController',    
        templateUrl : 'templates/center.html',
        
          })
        
        .when('/todo', {
        templateUrl: 'templates/product.html',
        controller: 'HomController'
    })
    
        .when('/todo1', {
        templateUrl: 'templates/grapes.html',
        controller: 'HomeController'
    })
    .when("/south", {
        templateUrl : "templates/south.html",
        controller: 'HomController',
    })
        .when("/island", {
        templateUrl : "templates/islands.html",
        controller: 'HomController',
    })
         .when("/gal1", {
        templateUrl : "templates/galnorth1.html",
        controller: 'HomController',
    })
         .when("/gal3", {
        templateUrl : "templates/galnorth2.html",
        controller: 'HomController',
    })
         .when("/gal2", {
        templateUrl : "templates/galcenter1.html",
        controller: 'HomController',
    })
         .when("/gal4", {
        templateUrl : "templates/galnorth3.html",
        controller: 'HomController',
    })
         
       .when("/test", {
        templateUrl : "templates/quiz.html",
        controller: 'HomeController',
    })
    
             
             .when('/home', {
                 controller: 'HomeController',
                 templateUrl: 'home/home.view.html',
                 controllerAs: 'vm',
             })

            .when('/login', {
                controller: 'LoginController',
                templateUrl: 'login/login.view.html',
                controllerAs: 'vm',
            })

            .when('/register', {
                controller: 'RegisterController',
                templateUrl: 'register/register.view.html',
                controllerAs: 'vm',
            })

            .otherwise({ redirectTo: '/login' });
    }

      run.$inject = ['$rootScope', '$location', '$cookies', '$http'];
     function run($rootScope, $location, $cookies, $http) {
          // keep user logged in after page refresh
          $rootScope.globals = $cookies.getObject('globals') || {};
          if ($rootScope.globals.currentUser) {
              $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
          }
      
      
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/login');
            }
        });
    }

})();