angular.module('angular.shared.controller', [])
.controller('AngularCtrl',['$scope', 'AcessService', 'User',
	function ($scope, AcessService, User) {
		$scope.logout = function () {
			AcessService.logout();
		};
		$scope.user = User;
		console.log(User);
	}
]);
