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
});

