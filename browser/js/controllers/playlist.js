app.controller('PlaylistCtrl', function ($scope, PlaylistFactory, $stateParams, PlayerFactory, SongFactory) {

	PlaylistFactory.fetchOne($stateParams.playlistId)
	.then(function(response) {
		$scope.playlist = response.data
		console.log("THIS IS MY PLAYLIST: ", $scope.playlist)
	})
	$scope.isCurrent = function (song) {
		var current = PlayerFactory.getCurrentSong();
		return current && current._id == song._id;
	};

	SongFactory.fetchAll()
	.then(function(songs) {
		console.log(songs)
		$scope.songs = songs;
	})

	$scope.submit = function(){
		//$scope.selectedItem only exists within the submit method, because pressing submit is what actually creates $scope.selectedItem.
		console.log($scope.selectedItem)
		var body = {}
		body.song = $scope.selectedItem;
		PlaylistFactory.addSong($stateParams.playlistId, body)
		//$scope.$digest();

	}
});

