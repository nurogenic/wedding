angular.module('WeddingApp.hotel', ['ui.router'])
	.config(function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('hotel', {
				url: "/hotel",
				controller: 'AppHotelController',
				templateUrl: "_/templates/hotel.html"
			});
	})
	.controller('AppHotelController', [function(){
		
	}]);