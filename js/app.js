var PanoRanch = angular.module('PanoRanch', [
	'ngRoute',
	'browseCtrl'
]);

PanoRanch.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/#', {
		templateUrl: '/views/browse.html',
		controller: 'browseCtrl'
	})
	.otherwise({
		redirectTo: '/#'
	})
}])