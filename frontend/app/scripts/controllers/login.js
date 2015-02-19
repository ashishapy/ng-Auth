'use strict';

/**
 * @ngdoc function
 * @name ngAuthAppApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the ngAuthAppApp
 */
angular.module('ngAuthAppApp')
  .controller('LoginCtrl', function ($scope, alert, $auth) {
    $scope.submit = function () {

      $auth.login({
        email: $scope.email,
        password: $scope.password
      })
        .then(function (res) {
          alert('success', 'Welcome!', 'Thanks for coming back ' + res.data.user.email + '!');
        })
        .catch(handleError);
    };

    $scope.authenticate = function (provider) {
      $auth.authenticate(provider).then(function (res) {
        alert('success', 'Welcome!', 'Thanks for coming back ' + res.data.user.displayName + '!');
      }, handleError);
    };

    function handleError(err) {
      alert('warning', 'Something went wrong :( ', err.message);
    }
  });
