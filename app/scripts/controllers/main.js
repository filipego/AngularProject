'use strict';

angular.module('newApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // Partials
    $scope.nav = "views/partials/nav.html";
    $scope.callout = "views/partials/callout.html";

  })


