
// Register `userList` component, along with its associated controller and template
angular.
  module('headerComponent').
  component('headerComponent', {
    templateUrl:'header/header.html',
    controller: ['$scope', HeaderController]
  });

  function HeaderController($scope){
  	$scope.menuVisible = false;
     $scope.toggleMenu = function(){
     	$scope.menuVisible = !$scope.menuVisible;
     }
  }

  