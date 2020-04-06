angular.module('app')
.controller('MainController', ['$scope','$http','$state','$rootScope', function ($scope, $http, $state, $rootScope) {

  //Login page controller var
  $scope.username = "";
  $scope.password = "";

  //Signup page controller var
  //$scope.baby = false;
  $scope.user=[];

  //forgotPassword page controller var
  $scope.oldEmail = "";
  $scope.oldUsername = "";
  $scope.newPassword1 = "";
  $scope.newPassword2 = "";


  $scope.loginSubmit = function(){
    
    

    //Check by posting whether username and password exists.
    $http({
            method: 'GET',
            url: '/getLogin',
            params: {"username":$scope.username,"password":$scope.password}
          }).then(function successCallback(response) {
              console.log("here");
              console.log(response.data.response);
              if(response.status == "404"){
                //alert("Some error occurred. Try again.");
                //Redirect to 404 page
              }else{
                $scope.user = response.data.response;
                console.log($scope.user);
                if($scope.user.role=='PRINCIPAL'){
                    $rootScope.userID =  $scope.user.userID;
                    $rootScope.role =  $scope.user.role;
                    $state.go('layout.principal');
                }
                if($scope.user.role=='TEACHER'){
                    $rootScope.userID =  $scope.user.userID;
                    $rootScope.role =  $scope.user.role;
                    $state.go('layout.teacher');
                }
                if($scope.user.role=='STUDENT'){
                    $rootScope.userID =  $scope.user.userID;
                    $rootScope.role =  $scope.user.role;
                    $state.go('layout.student');
                }
              }
          }, function errorCallback(error) {
              console.log(error);
            //Some error occurred page - 404
          });
  } 

  // $scope.displayBabyForm = function(){
  //   console.log("baby");
  //   $scope.baby = true;
  // }
  // $scope.disableBabyForm = function(){
  //   console.log("babyfalse");
  //   $scope.baby = false;
  // }

  //form user scope
  //$scope.user.firstName = "";
  //form object link this for each fields
  //if $scope.baby = true; add baby fields as well and also 
  //$scope.user.role = baby;

  $scope.signupSubmit = function(){
    console.log($scope.user)
    
    
    //get all fields data by joining to each.
    //Check by posting whether username and password exists.
    // $http({
    //         method: 'GET',
    //         url: '/getSignup',
    //         // params: {"pass user}
    //       }).then(function successCallback(response) {
    //           if(response.data == "Error"){
    //             //alert("Some error occurred. Try again.");
    //             //Redirect with error back to lgin
    //           }else{
    //             //alert("Process completed! Check result.");
               
    //             //Redirect to Login
    //           }
    //       }, function errorCallback(error) {
    //         console.log(error);
    //         //Some error occurred page - 404
    //       });
  } 

  $scope.fpSubmit = function(){
    
    //get all fields, usernme, email and new password, put request to update same
}

}]);