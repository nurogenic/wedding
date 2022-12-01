angular.module('WeddingApp.about', ['ui.router'])
	.config(function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('about', {
				url: "/about",
				controller: 'AppAboutController',
				templateUrl: "_/templates/about.html"
			});
	}).controller('AppAboutController', [ '$scope', function($scope){

		var hash = window.location.hash.replace('#/about?','').split('&');

		$scope.About = {
			tab: 'how-we-met'
		};

		for(var i = 0, len = hash.length; i<len; i++){
			var temp = hash[i].split('=');
			$scope.About[temp[0]] = temp[1];
		}

		console.log('AppAboutController');
	}]);