angular.module('app')
.controller('TeacherController', ['$scope','$http','$state','$rootScope', function ($scope, $http, $state, $rootScope) {

  console.log($rootScope.userID,$rootScope.role);
  // if($rootScope.userID==undefined||$rootScope.role==undefined){
  //   $state.go('layout.login');
  // }


  //get cookie from console
  //get cookie role , if role=teacher or principal
  //set defualt date month for events
  //if no cookie, redirect to login
  //based on userID - {getAll}
  //get profile info
  //get attendance
  //get events
  //get messages

  //functionalities if userid cookie is same as id of profile
  //update events based on month year - change above parameter
  //update attendance based on month year - change above parameter
  //add new message feature & refresh dashboard
  
  $scope.logout = function(){
    $rootScope.userID=undefined;
    $rootScope.role=undefined;
    $state.go('layout.main');
  }

}]);