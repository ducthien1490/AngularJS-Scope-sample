'use strict';

angular.module('App', [])
  .controller('parentController', function($scope) {
    $scope.money = 1000000;
    $scope.cars = ['BMW X6', 'RR Phantom', 'Maybach'];
    $scope.houses = { hanoi: 200, saigon: 500 };
  })
  .directive('transcludedScope', function() {
    var template = '<h3>Directive transclude scope</h3>' +
      '{{myMoney}}<br><input ng-model="myMoney"><br><br>' +
      '{{myHouses}}<br><input ng-model="myHouses.saigon">' +
      '<ng-transclude></ng-transclude>';
    return {
      transclude: true,
      scope: {
        myMoney: '@money',
        myHouses: '=houses'
      },
      template: template
    }
  });
