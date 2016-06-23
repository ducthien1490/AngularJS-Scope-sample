'use strict';

angular.module('App', [])
  .controller('parentController', function($scope) {
    $scope.money = 1000000;
    $scope.cars = ['BMW X6', 'RR Phantom', 'Maybach'];
    $scope.houses = { hanoi: 200, saigon: 500 };
  })
  .directive('oneWayIsolate', function() {
    var template = '<h3>Directive isolate scope: one-way binding</h3>' +
      '{{myMoney}}<br><input ng-model="myMoney"><br><br>';
    return {
      scope: {
        myMoney: '@money',
        myHouses: '@houses'
      },
      template: template
    }
  })
  .directive('twoWayIsolate', function() {
    var template = '<h3>Directive isolate scope: two-way binding</h3>' +
      '{{myMoney}}<br><input ng-model="myMoney"><br><br>';
    return {
      scope: {
        myMoney: '=money',
        myHouses: '=houses'
      },
      template: template
    }
  });
