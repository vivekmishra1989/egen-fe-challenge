
// Register `userList` component, along with its associated controller and template
angular.
  module('userList').
  component('userList', {
    templateUrl:'user-list/userList.html',
    controller: ['$scope', '$http', UserListController]
  });

  function UserListController($scope, $http){
    $scope.users = "Users";
    $scope.userList = [];
    $http.get('http://mocker.egen.io/users').then(function(response){
      $scope.userList = response.data;
    }); 
  }

  