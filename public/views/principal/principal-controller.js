angular.module('app')
.controller('PrincipalController', ['$scope','$http','$state','$rootScope', function ($scope, $http, $state, $rootScope) {

  console.log($rootScope.userID,$rootScope.role);
  // if($rootScope.userID==undefined||$rootScope.role==undefined){
  //   $state.go('layout.login');
  // }
  //based on userID - 
  //get profile detail
  //call for get teachers
  //call for get student cohort 1
  //call for get events-most recent
  //call for getmessages
  //call for get approve



  //functionalities
  //take cohort and cohort students  
  //delete teacher or student - isactive change
  //take event month and year click
  //add edit events feature
  //add new message feature
  //refresh dashboard
  //on click of profile link - sent to state teacher with id

}]);