angular.module('app')
.controller('StudentController', ['$scope','$http','$state','$rootScope', function ($scope, $http, $state, $rootScope) {
  console.log($rootScope.userID,$rootScope.role);
  // if($rootScope.userID==undefined||$rootScope.role==undefined){
  //   $state.go('layout.login');
  // }
  //get userid from console
  //get cookie role 
  //set defualt date month for events
  //set default month year for attendance
  //if no cookie, redirect to login
  //based on userID - {getAll}
  //get profile info
  //get attendance
  //get events
  //get messages

  //functionalities and refresh if userID cookie is same as id of profile
  //update events based on month year - change above parameter
  //update attendance based on month year - change above parameter
  //add new message feature & refresh dashboard - if role=student, else if teacher 
}]);