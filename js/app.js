var PanoRanch = angular.module('PanoRanch', [
	'ngRoute',
	'navigationService'
]);

PanoRanch.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'views/home.html',
		controller: 'browseCtrl'
	})
	.when('/login', {
		templateUrl: 'views/login.html'
		// controller: 'loginCtrl'
	})
	.when('/cart', {
		templateUrl: 'views/cart.html'
	})
	.when('/calendar', {
		templateUrl: 'views/calendar.html'
	})
	.when('/controlPanel', {
		templateUrl: 'views/controlPanel.html'
	})
	.otherwise({
		redirectTo: '/'
	})
}])

PanoRanch.directive('calendar', function() {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			$('#calendar').fullCalendar(scope.$eval(attrs.calendar), {

			})
		}
	}
})