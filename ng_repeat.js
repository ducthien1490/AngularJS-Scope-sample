'use strict';

angular.module('App', [])
  .controller('parentController', function($scope) {
    $scope.money = 1000000;
    $scope.cars = ['BMW X6', 'RR Phantom', 'Maybach'];
    $scope.houses = [{num: 200}, {num: 500 }];
  });
