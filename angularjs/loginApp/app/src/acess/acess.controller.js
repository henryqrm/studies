'use strict';
angular.module('angular.acess.controller',[])
.controller('AcessCtrl', ['$scope',
	function ($scope) {
		$scope.acess.email = 'autop@autopveiculos.com.br';
		$scope.acess.password = '123456';
	}
]);
