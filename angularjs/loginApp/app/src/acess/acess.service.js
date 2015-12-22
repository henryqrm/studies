'use strict';
angular.module('angular',[])
.service('AcessService', ['$http', function($http) {


	this.setAuthorization = function (token) {
		$http.defaults.headers.common.Authorization = token.acesss_token;
	};

}]);
