angular.module('RouteControllers', [])
    .controller('HomeController', function($scope) {
     })
     .controller('RegisterController', function($scope, UserAPIService) {
        $scope.registrationUser = {};
        var URL = "https://morning-castle-91468.herokuapp.com/";


        $scope.submitForm = function() {
            if ($scope.registrationForm.$valid) {
                $scope.registrationUser.username = $scope.user.username;
                $scope.registrationUser.password = $scope.user.password;

                UserAPIService.registerUser(URL + "accounts/register/", $scope.registrationUser).then(function(results) {
                    $scope.data = results.data;
                    alert("You have successfully registered ");
                }).catch(function(err) {
                    console.log(err);
                    alert("Registration failed, please try again with another username.");
                });
            }
        };
     // .controller('LoginController',function($scope,UserAPIService){
     //        if ($scope.registrationForm.$valid) {
     //            $scope.registrationUser.username = $scope.user.username;
     //            $scope.registrationUser.password = $scope.user.password;

     //            UserAPIService.registerUser(URL + "accounts/register/", $scope.registrationUser).then(function(results) {
     //                $scope.data = results.data;
     //                alert("You have successfully log in ");
     //            }).catch(function(err) {
     //                console.log(err);
     //                alert("Registration failed, please try again with another username.");
     //            });
            
     //        }
     //    };
    
          
    });
