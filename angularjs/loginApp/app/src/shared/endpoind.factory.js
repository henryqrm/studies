angular.module('angular.shared.endpoind.factory',[])
.constant('API_ENDPOINT', 'http://45.55.153.158/api')
.factory('ApiEndpoint', ['API_ENDPOINT',
	function (API_ENDPOINT) {
		return {
			Authenticate: function () {
				return API_ENDPOINT + '/auth/authorize';
			},

			GetProfile: function () {
				return API_ENDPOINT + '/profile';
			},

			RefreshToken: function () {
				return API_ENDPOINT + '/auth/refresh';
			},
		};
	}]
);
