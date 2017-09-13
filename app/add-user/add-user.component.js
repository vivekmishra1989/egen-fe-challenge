
// Register `userList` component, along with its associated controller and template
angular.
  module('addUser').
  component('addUser', {
    templateUrl:'add-user/addUser.html',
    controller: ['$scope','$http', '$routeParams', AddUserController]
  });

  function AddUserController($scope, $http, $routeParams){
    $scope.newUser = {
      firstName : '',
      lastName : '',
      email: '',
      address :{
        street: '',
        city: '',
        state: '',
        country: ''
      }
    };
    $scope.addUser = function(){
      $http.post('http://mocker.egen.io/users/',$scope.newUser).then(function(response){
        console.log(response.data);
      });
    }
  }

  