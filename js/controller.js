angular.module('RouteControllers', [])
    .controller('RegisterController', function($scope, UserAPIService,store) {
        $scope.registrationUser = {};
        var URL = "https://morning-castle-91468.herokuapp.com/";
        $scope.login = function() {
            UserAPIService.callAPI(URL + "accounts/api-token-auth/", $scope.data).then(function(results) {
                $scope.token = results.data.token;
                store.set('username', $scope.registrationUser.username);
                store.set('authToken', $scope.token);
            }).catch(function(err) {
                console.log(err);
            });
        }

        $scope.submitForm = function() {
            if ($scope.registrationForm.$valid) {
                $scope.registrationUser.username = $scope.user.username;
                $scope.registrationUser.password = $scope.user.password;

                UserAPIService.callAPI(URL + "accounts/register/", $scope.registrationUser).then(function(results) {
                    $scope.data = results.data;
                    alert("You have successfully registered ");
                    $scope.login();
                }).catch(function(err) {
                    console.log(err);
                    alert("Registration failed, please try again with another username.");
                });
            }
        };
    })
    .controller('loginController', function($scope, UserAPIService,store) {
         $scope.loginUser = {};
          $scope.submitForm = function() {
            if ($scope.loginForm.$valid) {
                $scope.loginUser.username = $scope.user.username;
                $scope.loginUser.password = $scope.user.token;
                alert("You login in");
                 UserAPIService.callAPI(URL + "login/", $scope.loginUser).then(function(results) {
                     $scope.data = results.data;
                //     alert("You have login registered ");
                    
                 })

                   .catch(function(err) {
                    console.log(err);
                    alert("Login failed, please try again with another username.");
                });
               
            }
        };







    })
    .controller('HomeController', function($scope) {
        
        
        $scope.showMe = false;
        $scope.show_Me = false;
        $scope.showMe1 = false;
        $scope.showMe3 = false;
        $scope.class1 = [];
        $scope.myClass = [];

        
        
          
          $scope.toggle = function() {
            $scope.showMe = !$scope.showMe;
          
  };
          $scope.toggle2 = function() {
            $scope.showMe1 = !$scope.showMe1;
          
  };
          $scope.toggle3 = function() {
            $scope.showMe3 = !$scope.showMe3;
          
  };
          $scope.toggle1 = function() {
            $scope.show_Me = !$scope.show_Me;
          
  };
          $scope.removeclass = function() {
          $scope.class1.pop('style1');
          
    
  };
        $scope.classimg = function() {
           $scope.class1.push('style1');
           
  };
        
          $scope.removeClass = function() {
          $scope.myClass.pop('alpha');
          
    
  };
    
  
        $scope.addClass = function() {
           $scope.myClass.push('alpha');
           
  };

    })

     
  