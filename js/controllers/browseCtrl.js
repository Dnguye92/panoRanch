var browseCtrl = angular.module('browseCtrl', []);

browseCtrl.controller('browseCtrl', ['$scope', '$http', function($scope, $http) {
	$http.get('./js/dummyData.json').success(function(data) {
		$scope.flowerName = data;
		$scope.flowerImg = 'image';
		console.log(data);
		console.log($scope.flowerName);
	})
}])