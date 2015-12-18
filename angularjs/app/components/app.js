angular.module('angular',[
	//
	'ui.router',
	'angular.requests'
])
.run()
.config(['$stateProvider', '$urlRouterProvider',
	function ($stateProvider, $urlRouterProvider) {
		$stateProvider.state('angular', {
			abstract: true,
			url: '/',
			controller: 'AngularCtrl',
			templateUrl: 'app/template/template.tpl.html',
			resolve: {
				
			}
		});
		$urlRouterProvider.otherwise('/');
	}
]);
