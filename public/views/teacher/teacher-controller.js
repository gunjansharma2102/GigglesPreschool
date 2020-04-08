angular.module('app')
.controller('TeacherController', ['$scope','$http','$state','$rootScope', function ($scope, $http, $state, $rootScope) {

  console.log($rootScope.userID,$rootScope.role);
  //get class no also here
  $scope.ClassNo = 'CRN01'; //comment this
  // if($rootScope.userID==undefined||$rootScope.role==undefined){
  //   $state.go('layout.login');
  // }

  
  //based on userID - {getAll}
  //get profile info
  //get attendance
  //get events
  //get messages



  //variables
  $scope.user = {};
 // $scope.cohortSelected = "CRN01";
  $scope.students = [];
  $scope.events = [];
  $scope.receivedmess = [];
  $scope.sentmess = [];
  $scope.receive = true;
  //get requests

  //get User
  $http({
      method: 'GET',
      url: '/getUser',
      params: {"userID":$rootScope.userID}
    }).then(function successCallback(response) {
        console.log(response.data.response[0]);
        if(response.data.response == "ERROR"){
         // $state.go('error');
        }else{
          $scope.user = response.data.response[0];
        }
    }, function errorCallback(error) {
        console.log(error);
        // $state.go('error'); //404
    });


    //get Students - get all students data
  $http({
      method: 'GET',
      url: '/getStudents',
      params: {"ClassNo":$scope.ClassNo}
    }).then(function successCallback(response) {
        console.log(response.data.response);
        if(response.data.response == "ERROR"){
         // $state.go('error');
        }else{
          $scope.students = response.data.response;
        }
    }, function errorCallback(error) {
          console.log(error);
          // $state.go('error'); //404
    });

  //get Eventss - get all events data
  //change to based on class
  $http({
      method: 'GET',
      url: '/getEvents'
    }).then(function successCallback(response) {
        console.log(response.data.response);
        if(response.data.response == "ERROR"){
         // $state.go('error');
        }else{
          $scope.events = response.data.response;
        }
    }, function errorCallback(error) {
          console.log(error);
          // $state.go('error'); //404
    });


    //get Sent messages
    $http({
      method: 'GET',
      url: '/getSentNotif',
      params: {"userID":$rootScope.userID}
    }).then(function successCallback(response) {
        console.log(response.data.response);
        if(response.data.response == "ERROR"){
         // $state.go('error');
        }else{
          $scope.sentmess = response.data.response;
        }
    }, function errorCallback(error) {
          console.log(error);
          // $state.go('error'); //404
    });

    //get Rec messages
    $http({
      method: 'GET',
      url: '/getRecNotif',
      params: {"userID":$rootScope.userID}
    }).then(function successCallback(response) {
        console.log(response.data.response);
        if(response.data.response == "ERROR"){
         // $state.go('error');
        }else{
          $scope.receivedmess = response.data.response;
        }
    }, function errorCallback(error) {
          console.log(error);
          // $state.go('error'); //404
    });


  $scope.getSentMessages = function(){

    console.log($scope.receive);
    $scope.receive = false; 
    $http({
      method: 'GET',
      url: '/getSentNotif',
      params: {"userID":$rootScope.userID}
    }).then(function successCallback(response) {
        console.log(response.data.response);
        if(response.data.response == "ERROR"){
         // $state.go('error');
        }else{
          $scope.sentmess = response.data.response;
        }
    }, function errorCallback(error) {
          console.log(error);
          // $state.go('error'); //404
    });

  }

  $scope.getRecMessages = function(){ 
    console.log($scope.receive);
    $scope.receive = true; 
    $http({
      method: 'GET',
      url: '/getRecNotif',
      params: {"userID":$rootScope.userID}
    }).then(function successCallback(response) {
        console.log(response.data.response);
        if(response.data.response == "ERROR"){
         // $state.go('error');
        }else{
          $scope.receivedmess = response.data.response;
        }
    }, function errorCallback(error) {
          console.log(error);
          // $state.go('error'); //404
    });
    //not refreshing, check that
  }
  
  
  $scope.logout = function(){
    $rootScope.userID=undefined;
    $rootScope.role=undefined;
    $state.go('layout.main');
  }

}]);