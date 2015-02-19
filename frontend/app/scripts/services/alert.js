'use strict';

/**
 * @ngdoc service
 * @name ngAuthAppApp.alert
 * @description
 * # alert
 * Service in the ngAuthAppApp.
 */
angular.module('ngAuthAppApp')
  .service('alert', function ($rootScope, $timeout) {
    var alertTimeout;
    return function (type, title, message, timeout){
      $rootScope.alert = {
        hasBeenShown: true,
        show: true,
        message: message,
        title: title,
        type: type
      };
      $timeout.cancel(alertTimeout);
      alertTimeout = $timeout(function(){
        $rootScope.alert.show = false;
      }, timeout || 2000);
    };
  });
