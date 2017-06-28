PanoRanch.controller('browseCtrl', ['$scope', '$http', function($scope, $http) {
	$http.get('./js/dummyData.json').success(function(data) {
		$scope.flowerName = data;
		$scope.flowerImg = 'image';
		$scope.flowerOrder = 'name';
		console.log(data);
	})
}])