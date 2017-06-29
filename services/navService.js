angular.module('navigationService', [])
	.factory('navService', ['$location', function($location) {
		var home = function() {
			$location.path('/');
		}
		var login = function() {
			$location.path('/login');
		};
		var cart = function() {
			$location.path('/cart');
		};
		var calendar = function() {
			$location.path('/calendar');
		}
		var controlPanel = function() {
			$location.path('/controlPanel');
		}
		return {
			home: home,
			login: login,
			cart: cart,
			calendar: calendar,
			controlPanel: controlPanel
		};
	}])