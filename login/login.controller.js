﻿(function () {
    'use strict';

    angular
        .module('App')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$location', 'AuthenticationService', 'FlashService'];
    function LoginController($location, AuthenticationService, FlashService) {
        var vm = this;

        vm.login = login;

        (function initController() {
            // reset login status
            AuthenticationService.ClearCredentials();
        })();

        function login() {
            vm.dataLoading = true;
            AuthenticationService.Login(vm.username, vm.password, function (response) {
                if (response.success) {
                    AuthenticationService.SetCredentials(vm.username, vm.password);
                      $("#hidden").hide();
                      $("#hidshow").show();
                      $location.path('/home');                                    
                      
                } else {
                    FlashService.Error(response.message);
                    vm.dataLoading = false;
                }
            });
        };

    


    }

})();
