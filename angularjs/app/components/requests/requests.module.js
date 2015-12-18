'use strict';
angular.module('angular.requests',[
	'angular.requests.controller'
])
.config(['$stateProvider',
	function ($stateProvider) {
		$stateProvider.state('requests',{
			url: '/requests',
			controller: 'RequestsCtrl',
			templateUrl: 'components/requests/requests.html'
		});
	}
]);
