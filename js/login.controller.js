angular.module('RouteControllers', [])
.controller('LoginController',function($scope,UserAPIService){
            if ($scope.registrationForm.$valid) {
                $scope.registrationUser.username = $scope.user.username;
                $scope.registrationUser.password = $scope.user.password;

                UserAPIService.registerUser(URL + "accounts/register/", $scope.registrationUser).then(function(results) {
                    $scope.data = results.data;
                    alert("You have successfully log in ");
                }).catch(function(err) {
                    console.log(err);
                    alert("Registration failed, please try again with another username.");
                });
            
            }
        };
    




// (function () {
//     'use strict';

//     angular
//         .module('app')
//         .controller('LoginController', LoginController);

//     LoginController.$inject = ['$location', 'AuthenticationService', 'FlashService'];
//     function LoginController($location, AuthenticationService, FlashService) {
//         var vm = this;

//         vm.login = login;

//         (function initController() {
//             // reset login status
//             AuthenticationService.ClearCredentials();
//         })();

//         function login() {
//             vm.dataLoading = true;
//             AuthenticationService.Login(vm.username, vm.password, function (response) {
//                 if (response.success) {
//                     AuthenticationService.SetCredentials(vm.username, vm.password);
//                     $location.path('/');
//                 } else {
//                     FlashService.Error(response.message);
//                     vm.dataLoading = false;
//                 }
//             });
//         };
//     }

// })();
