'use strict';

angular.
  module('egenFeChallenge').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/users', {
          template: '<user-list></user-list>'
        }).
        when('/users/:id', {
          template: '<user-detail></user-detail>'
        }).
        when('/addUser', {
          template: '<add-user></add-user>'
        }).
        otherwise('/users');
    }
  ]);