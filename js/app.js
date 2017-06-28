var PanoRanch = angular.module('PanoRanch', [
	'ngRoute',
	'navigationService'
]);

PanoRanch.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'views/browse.html',
		controller: 'browseCtrl'
	})
	.when('/login', {
		templateUrl: 'views/login.html'
		// controller: 'loginCtrl'
	})
	.otherwise({
		redirectTo: '/'
	})
}])