angular.module('countDownDirective', [])
	.directive('countDown', ['$interval', function($interval){
		return {
			restrict: 'EA',
			scope: {
				date: '@'
			},
			templateUrl: '_/templates/countDown.html',
			link: function(scope, element, attrs){

				var then = new Date(scope.date).getTime();
				var timeObj = {};

				scope.canShow = function () {
					return Date.now() < then;
				};

				scope.setTimeObj = function(){
					var now = new Date().getTime();

					var delta = Math.abs(then - now) / 1000;

					var years = Math.floor(delta / (86400 * 365) );
					delta -= years * (86400 * 365);

					// calculate (and subtract) whole days
					var days = Math.floor(delta / 86400);
					delta -= days * 86400;

					// calculate (and subtract) whole hours
					var hours = Math.floor(delta / 3600) % 24;
					delta -= hours * 3600;

					// calculate (and subtract) whole minutes
					var minutes = Math.floor(delta / 60) % 60;
					delta -= minutes * 60;

					// what's left is seconds
					var seconds = Math.floor(delta )% 60;

					timeObj = {
						years: years,
						days: days,
						hours: hours,
						minutes: minutes,
						seconds: seconds
					};
				};

				scope.getTimeObj = function(){
					return timeObj;
				};

				scope.setTimeObj();
				$interval(scope.setTimeObj, 1000);
			}
		}
	}]);
