angular.module('angular.requests.controller',[])
.controller('RequestsCtrl',['$q','$http','$scope',
	function ($q, $http, $scope) {
		// Aqui deveria ser um service
		var API_ENDPOINT = 'http://45.55.153.158/api';
		var GetProfile = API_ENDPOINT + '/profile';
		var Authenticate = API_ENDPOINT + '/auth/authorize';
		console.log(Authenticate);
		$scope.email = 'autop@autopveiculos.com.br';
		$scope.password = '123456';

		$scope.methodPost = function () {
			var defer = $q.defer();
			$http.post(Authenticate, {
				email: $scope.email,
				password: $scope.password
			}).success(function (token) {
				console.log(token);
				defer.resolve(token);
			}).error(function (error) {
				console.log(error);
				defer.reject(error);
			});
			return defer.promise;
		};
		$scope.methodGet = function () {
			var defer = $q.defer();
			$http.get(GetProfile)
			.success(function (userDate) {
				console.log(userDate);
				defer.resove(userDate);
			})
			.error(function (error) {
				defer.reject(error);
				console.log(error);
			});
			return defer.promise;
		};
	}
]);
