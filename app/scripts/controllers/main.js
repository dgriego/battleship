'use strict';

/**
 * @ngdoc function
 * @name battleshipApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the battleshipApp
 */
angular.module('battleshipApp')
  .controller('MainCtrl', function ($scope) {
    $scope.board = {
        o : '<td>o</td>',
        hit : '<td>x</td>'
    };
  });
