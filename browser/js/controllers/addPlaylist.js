app.controller('addPlaylistsCtrl', function ($scope, PlaylistFactory, $state) {

	$scope.submit = function(){

	    console.log(" i made a new playlist", $scope.playlist)
	    //$scope.playlist was defined by ng-model

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