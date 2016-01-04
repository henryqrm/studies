angular.module('angular',[])
.service('AcessService', ['$q','$http','ApiEndpoint', '$window',
	function($q, $http, ApiEndpoint, $window) {

		var AcessService = this;

		var TOKEN_LOCALSTORAGE = 'WebAppPortalTrocar';

		var fns = [];

		this.setAuthorization = function (token) {
			$http.defaults.headers.common.Authorization = token.acesss_token;
		};

		var user = null;

		this.login = function (email, password) {

			var defer = $q.difer();

			$http.post(ApiEndpoint.Authenticate(), {
				email: email,
				password: password
			}).success(
				function (token) {
					AcessService.saveToken(token);
					AcessService.executeAuthFunctions(token);
					defer.resolve(token);
				}
			).error(
				function (error) {
					console.log(error);
					defer.reject(error);
				}
			);

			return defer.promise();
		};
		this.saveToken = function (token) {
				$window.localStorage.setItem(TOKEN_LOCALSTORAGE, JSON.stringify(token));
		};
		this.executeAuthFunctions = function (token) {
			for (var f in fns) {
				var fn = fns[f];
				fn(token);
			}
		};

		this.logout = function () {
			var defer = $q.defer();
			AcessService.deleteAuthorization();
			user = null;
			this.executeAuthFunctions(null);
			defer.resolve('Logged out');
			return defer.promise;
			// chamar fn com null de parametro
		};

		this.onAuth = function (fn) {
			fns.push(fn);
		};

		this.refreshToken = function (token) {
			var defer = $q.defer();
			$http.post(ApiEndpoint.RefreshToken(), {
				token: token.access_token
			}).success(function (token) {
				AcessService.saveToken(token);
				defer.resolve(token);
			}).error(function (error) {
				defer.reject(error);
			});
			return defer.promise;
		};
		this.getToken = function () {
			var defer = $q.defer();

			var string = $window.localStorage.getItem(TOKEN_LOCALSTORAGE) || '{}';
			var object = JSON.parse(string);
			if (object.expires && object.access_token) {
				if (AcessService.verifyToken(object)) {
					defer.resolve(object);
				} else {
					AcessService.refreshToken(object).then(function (token) {
						defer.resolve(token);
					}).catch(function () {
						AcessService.deleteAuthorization();
						defer.reject('NoToken');
					});
				}
			} else {
				defer.reject('NoToken');
			}

			return defer.promise;
		};

		this.requireAuth = function () {
			var promise = AcessService.getToken();
			promise.then(function (token) {
				AcessService.setAuthorization(token);
			});
			return promise;
		};

		this.requireUnauthenticated = function () {
			var defer = $q.defer();
			AcessService.getToken().then(function () {
				defer.reject('UNAUTH_REQUIRED');
			}).catch(function () {
				defer.resolve('Unauthenticated');
			});
			return defer.promise;
		};

		this.getUser = function () {
			var defer = $q.defer();

			if (user !== null) {
				defer.resolve(user);
			} else {
				AcessService.requireAuth().then(function () {
					$http.get(ApiEndpoint.GetProfile()).success(function (userData) {
						user = userData;
						defer.resolve(userData);
					}).error(function (error) {
						console.log(error);
						var errorCause = (error && error.status) || '';

						switch (errorCause) {
							case 'Unauthorized':
								defer.reject('AUTH_REQUIRED');
								break;
							default:
								defer.reject('NoProfile');
								break;
						}

					});
				}).catch(function () {
					defer.reject('AUTH_REQUIRED');
				});
			}

			return defer.promise;
		};
		this.deleteAuthorization = function () {
			delete $http.defaults.headers.common.Authorization;
			$window.localStorage.removeItem(TOKEN_LOCALSTORAGE);
		};

		this.verifyToken = function (token) {
			var now = new Date();
			var tokenDate = new Date(token.expires * 1000);
			return tokenDate > now;
		};
	}
]);
