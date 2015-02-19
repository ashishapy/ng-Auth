'use strict';

/**
 * @ngdoc function
 * @name ngAuthAppApp.controller:LogoutCtrl
 * @description
 * # LogoutCtrl
 * Controller of the ngAuthAppApp
 */
angular.module('ngAuthAppApp').controller('LogoutCtrl', function ($auth, $state) {
  $auth.logout();
  $state.go('main');
});
