app.controller('addPlaylistsCtrl', function ($scope, PlaylistFactory, $state) {

	$scope.submit = function(){

	    //$scope.playlist was defined by ng-model
	    console.log(" i made a new playlist", $scope.playlist)

	    PlaylistFactory.create($scope.playlist)
	    .then(function(fetchedPlaylist) {
	    	console.log(fetchedPlaylist)
		    // $state.go("playlist({playlistId: fetchedPlaylist._id})")
		    $state.go('playlist', {playlistId: fetchedPlaylist._id})
	    })

	    $scope.playlist = {
	        name: " "
	    }


	}

});