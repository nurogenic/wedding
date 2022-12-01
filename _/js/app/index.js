angular.module('WeddingApp.index', ['ui.router'])
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider
			.when('/c?id', '/contacts/:id')
			.when('/user/:id', '/contacts/:id')
			.otherwise('/');

		$stateProvider
			.state('home', {
				url: "/",
				controller: "IndexController"
			});
	}])
	.controller('IndexController', ['$scope', function($scope){
		console.log('IndexController');
	}]);