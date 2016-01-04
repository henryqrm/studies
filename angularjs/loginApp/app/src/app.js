'use strict';
angular.module('angular', [
	'ui.router',
	'angular.acess',
	'angular.shared'
])
.config(['$stateProvider','$urlRouterProvider',
	function ($stateProvider, $urlRouterProvider) {
		$stateProvider.state('angular',{
			abstract: true,
			url: '/',
			controller: 'AngularCtrl',
			templateUrl: 'src/acess/acess.html'
		});

		$urlRouterProvider.otherwise('/');
	}
]);
