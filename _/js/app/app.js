angular.module("WeddingApp", [
	'ngAnimate',
	'ui.router',
	'countDownDirective',
	'musicRequest',
	'instagramTwitterImagesDirective',
	'WeddingApp.index',
	'WeddingApp.about',
	'WeddingApp.photos',
	'WeddingApp.hotel',
	'WeddingApp.registry',
	'WeddingApp.engageParty'
])
	.controller('WeddingAppController', ['$scope', function($scope) {
		$scope.WeddingApp = {
			showGlobalMessages: true
		};
	}])
	.run(['$rootScope', '$state', '$stateParams', function($rootScope, $state, $stateParams){
		$rootScope.$state = $state;
		$rootScope.$stateParams = $stateParams;

		$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
			window.scrollTo(0, 0);
			// console.log(event, 'stateChangeStart');
		});

		$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
			// console.log(event, 'stateChangeSuccess');
		});

		$rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error){
			// console.log(error, 'stateChangeError');
		});
	}]);