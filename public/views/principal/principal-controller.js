angular.module('app')
.controller('PrincipalController', ['$scope','$http','$state','$rootScope', function ($scope, $http, $state, $rootScope) {

  console.log($rootScope.userID,$rootScope.role);

  if($rootScope.userID==undefined||$rootScope.role==undefined){
    $state.go('layout.login');
  }

  //variables
  $scope.user = {};
  $scope.teachers = []; 
  $scope.cohortSelected = "CRN01";
  $scope.students = [];
  $scope.events = [];
  $scope.approvals = [];
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

  //get Teachers - get all teachers data
  $http({
      method: 'GET',
      url: '/getTeachers'
    }).then(function successCallback(response) {
        console.log(response.data.response);
        if(response.data.response == "ERROR"){
         // $state.go('error');
        }else{
          $scope.teachers = response.data.response;
        }
    }, function errorCallback(error) {
          console.log(error);
          // $state.go('error'); //404
    });

    //get Students - get all students data
  $http({
      method: 'GET',
      url: '/getStudents',
      params: {"ClassNo":$scope.cohortSelected}
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

  // //get Approval - get all pending approval users data
  // $http({
  //     method: 'GET',
  //     url: '/getInactiveUsers'
  //   }).then(function successCallback(response) {
  //       console.log(response.data.response);
  //       if(response.data.response == "ERROR"){
  //        // $state.go('error');
  //       }else{
  //         $scope.approvals = response.data.response;
  //       }
  //   }, function errorCallback(error) {
  //         console.log(error);
  //         // $state.go('error'); //404
  //   });

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

  //functionalities
  //take cohort and cohort students 

  $scope.fetchStudents = function(){
    console.log($scope.cohortSelected);
    $http({
      method: 'GET',
      url: '/getStudents',
      params: {"ClassNo":$scope.cohortSelected}
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
  } 

  //delete teacher or student - isactive change
  $scope.approveUser = function(){
    //approve user by putting isactive = true request and check if class n is updated
  }

  $scope.rejectUser = function(){
    //approve user by putting isactive = true request and check if class n is updated
  }


  //add edit events feature
  //add new message feature
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
  //refresh dashboard
  //on click of profile link i.e teacher's name- sent to state teacher with id

  $scope.logout = function(){
    $rootScope.userID=undefined;
    $rootScope.role=undefined;
    $state.go('layout.main');
  }

}]);