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
	.otherwise({
		redirectTo: '/'
	})
}])