angular.module(repository)
    .factory('repository', ['$http', function ($http) {
        var repository = {};
        
        repository.get = function(){
            return $http.get('http://mocker.egen.io/users');
        }
        return repository;
    }]);
