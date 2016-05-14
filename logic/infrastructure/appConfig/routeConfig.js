var routeConfig = angular.module('routeConfig',[]);

routeConfig.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/startPage', {
        templateUrl: './views/startPageView.html',
        controller: 'startPageController'
      }).
    when('/contact', {
        templateUrl: './views/contactView.html',
        controller: 'contactController'
      }).
      otherwise({
        redirectTo: '/startPage'
      });
  }]);

