
// Register `userList` component, along with its associated controller and template
angular.
  module('userDetail').
  component('userDetail', {
    templateUrl:'user-detail/userdetail.html',
    controller: ['$scope','$http', '$routeParams', UserDetailController]
  });

  function UserDetailController($scope, $http, $routeParams){
    $scope.user = {};
    $http.get('http://mocker.egen.io/users/'+$routeParams.id).then(function(response) {
      $scope.user = response.data;
      console.log(response.data);
    });
    $scope.deleteUser = function(){
      $http.delete('http://mocker.egen.io/users/'+$routeParams.id).then(function(response){

      });
    }
  }

  