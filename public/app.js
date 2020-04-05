'use strict';
var myApp = angular.module('app', ['ui.router', 'ngResource']);
myApp.config(['$urlRouterProvider','$stateProvider', '$locationProvider', function($urlRouterProvider,$stateProvider,$locationProvider){

  // Remove # from URL
  $locationProvider.html5Mode(
    {
        enabled: true,
        requireBase: false
    });

  $locationProvider.hashPrefix('!');

  $urlRouterProvider.otherwise('/');


   $stateProvider
      .state('layout',{
          url: '',
          abstract: true,
          views: {
            'header': {
                templateUrl: '',
                },
          },
      })

      .state('layout.main', {
        url: '/',
        views: {
            'body@': {
                templateUrl: 'main.html',
                controller: 'MainController',
              },
          },
      })

      .state('layout.login', {
        url: '/login',
        views: {
            'body@': {
                templateUrl: '/views/login.html',
                controller: 'MainController',
              },
          },
      })

      .state('layout.signup', {
        url: '/signup',
        views: {
            'body@': {
                templateUrl: '/views/signup.html',
                controller: 'MainController',
              },
          },
      })

      .state('layout.forgotpassword', {
        url: '/forgotpassword',
        views: {
            'body@': {
                templateUrl: '/views/forgotpassword.html',
                controller: 'MainController',
              },
          },
      })


      .state('layout.student', {
        url: '/student',
        views: {
            'body@': {
                templateUrl: '/views/student/studentDashboard.html',
                controller: 'StudentController',
              },
          },
      })

      .state('layout.teacher', {
        url: '/teacher',
        views: {
            'body@': {
                templateUrl: '/views/teacher/teacherdashboard.html',
                controller: 'TeacherController',
              },
          },
      })

      .state('layout.principal', {
        url: '/principal',
        views: {
            'body@': {
                templateUrl: '/views/principal/principaldashboard.html',
                controller: 'PrincipalController',
              },
          },
      })



}]);