'use strict';

/**
 * @ngdoc function
 * @name ngAuthAppApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the ngAuthAppApp
 */
angular.module('ngAuthAppApp')
  .controller('HeaderCtrl', function ($scope, $auth) {
    $scope.isAuthenticated = $auth.isAuthenticated;
  });
