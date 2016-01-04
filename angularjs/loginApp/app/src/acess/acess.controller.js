'use strict';
angular.module('angular.acess.controller',[])
.controller('AcessCtrl', ['$scope','$window','AcessService',
	function ($scope, $window, AcessService) {
		$scope.acess.email = 'autop@autopveiculos.com.br';
		$scope.acess.password = '123456';
		$scope.login = function () {
			AcessService.login($scope.user.email, $scope.user.password).then(function (data) {
				console.log(data);
			}).catch(function (error) {
				if (!error) {
					// Probabily no internet
				} else {
					switch (error.status) {
						case 'UserNotExists':
							$window.alert('User not exist');
							break;
						case 'BadRequest':
							$window.alert('Campos ausentes');
							break;
						default:
							break;
					}
				}
			}).finally(function () {

			});
		};
	}
]);
