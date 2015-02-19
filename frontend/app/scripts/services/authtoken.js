'use strict';

/**
 * @ngdoc service
 * @name ngAuthAppApp.authToken
 * @description
 * # authToken
 * Factory in the ngAuthAppApp.
 */
angular.module('ngAuthAppApp').factory('authToken', function ($window) {
  var storage = $window.localStorage;
  var cachedToken;
  var userToken = 'userToken';

  // Public API here
  var authToken = {
    setToken: function (token) {
      cachedToken = token;
      storage.setItem(userToken, token);
    },
    getToken: function(){
      if(!cachedToken) {
        cachedToken = storage.getItem(userToken);
      }
      return cachedToken;
    },
    isAuthenticated: function(){
      return !!this.getToken();
    },
    removeToken: function(){
      cachedToken = null;
      storage.removeItem(userToken);
    }
  };
  return authToken;
});
