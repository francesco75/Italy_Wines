
(function () {
    'use strict';
    angular
        .module('App')
        .controller('HomController',HomController);
            
 
    
    function HomController($scope) {
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
}
})();
      