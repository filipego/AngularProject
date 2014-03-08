'use strict';

angular.module('newApp', [
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/pages/home.html',
        controller: function( $rootScope ){
            $rootScope.title= 'Home';
            $rootScope.bodyClass = 'home';
        }
      })

      .when('/other-page', {
        templateUrl: 'views/pages/other-page.html',
        controller: function( $rootScope ){
            $rootScope.title= 'Other Page';
            $rootScope.bodyClass = 'otherpage';
        }

      })

      .otherwise({
        redirectTo: '/'
      });
  });