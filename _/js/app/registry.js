angular.module('WeddingApp.registry', ['ui.router'])
	.config(function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('registry', {
				url: "/registry",
				controller: 'AppRegistryController',
				templateUrl: "_/templates/registry.html"
			});
	}).controller('AppRegistryController', [ '$scope', function($scope){
		console.log('AppRegistryController');
	}]);