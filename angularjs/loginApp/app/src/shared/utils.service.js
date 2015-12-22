'use strict';
angular.module('angular.shared.util', [])

.service('UtilService', ['$window',
	function ($window) {
		var TOKEN_LOCALSTORAGE = 'H*78411@#aqSD#AQa&sd';
		this.verifyToken = function (token) {
			var now = new Date();
			var tokenDate = new Date(token.expires * 1000);
			return tokenDate > now;
		};
		this.saveToken = function (token) {
			$window.localStorage.setItem(TOKEN_LOCALSTORAGE, JSON.stringify(token));
		};
		this.removeToken = function () {
			$window.localStorage.removeItem(TOKEN_LOCALSTORAGE);
		};
	}
]);
