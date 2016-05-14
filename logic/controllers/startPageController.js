angular.module('myAppControllers')
    .controller('startPageController', ['$scope', '$http',  function ($scope, $http) {
    

    $scope.woot = 'This is Start Page';
  }]);