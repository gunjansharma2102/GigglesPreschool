
angular.module('app')
.controller('MainController', ['$scope','$http','$state', function ($scope, $http, $state) {

  //Login page controller code
  $scope.username = "";
  $scope.password = "";

  $scope.loginSubmit = function(){
    
    //Check by posting whether username and password exists.
    $http({
            method: 'GET',
            url: '/login',
            params: {"username":$scope.username,"password":$scope.password}
          }).then(function successCallback(response) {
              if(response.data == "Error"){
                //alert("Some error occurred. Try again.");
                //Redirect with error back to lgin
              }else{
                //alert("Process completed! Check result.");
                // $scope.showResult=1;
                // $scope.child = response.data;
                //Redirect to dashboard
              }
          }, function errorCallback(error) {
            console.log(error);
            //Some error occurred page - 404
          });
  } 

  //Signup page controller code

  //Add fields - $scope.

  $scope.signupSubmit = function(){
    
    //Check by posting whether username and password exists.
    $http({
            method: 'GET',
            url: '/signup',
            // params: {"username":$scope.username,"password":$scope.password}
          }).then(function successCallback(response) {
              if(response.data == "Error"){
                //alert("Some error occurred. Try again.");
                //Redirect with error back to lgin
              }else{
                //alert("Process completed! Check result.");
                // $scope.showResult=1;
                // $scope.child = response.data;
                //Redirect to Login
              }
          }, function errorCallback(error) {
            console.log(error);
            //Some error occurred page - 404
          });
  } 
  

}]);