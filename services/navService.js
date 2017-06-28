angular.module('navigationService', [])
	.factory('navService', ['$location', function($location) {
		var home = function() {
			$location.path('/');
		};
		var login = function() {
			$location.path('/login');
		};
		return {
			home: home,
			login: login
		};
	}])