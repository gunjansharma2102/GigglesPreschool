angular.module('app')
.controller('MainController', ['$scope','$http','$state', function ($scope, $http, $state) {
	$scope.results=[];
  $scope.button1 = false;
  $http({
        method: 'GET',
        url: '/test'
      }).then(function successCallback(response) {
          $scope.results = response.data;
      }, function errorCallback(error) {
        console.log(error);
      });

  $scope.button12 = function(button1){
    if(button1 == true){
      button1 = false;
    }else{
      button1 = true;
    }
  } 

}]);