angular.module('WeddingApp.engageParty', ['ui.router'])
	.config(function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('engageParty', {
				url: "/engagement-party",
				controller: 'AppEngagePartyController',
				templateUrl: "_/templates/engageParty.html"
			});
	}).controller('AppEngagePartyController', [ '$scope', function($scope){
		console.log('AppEngagePartyController');
	}]);