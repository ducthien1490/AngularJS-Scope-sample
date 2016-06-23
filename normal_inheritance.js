'use strict';

angular.module('App', [])
  .controller('parentController', function($scope) {
    $scope.money = 1000000;
    $scope.cars = ['BMW X6', 'RR Phantom', 'Maybach'];
    $scope.houses = { hanoi: 200, saigon: 500 };
  })
  .controller('childController', function() {
  })
  .directive('scopeTrue', function() {
    var template = '<h3>Directive scope: true</h3>' +
      '{{money}}<br><input ng-model="money"><br><br>' +
      '{{houses}}<br><input ng-model="houses.saigon">';
    return {
      scope: true,
      template: template
    }
  });
