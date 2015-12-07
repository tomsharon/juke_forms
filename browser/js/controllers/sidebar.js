app.controller('SidebarCtrl', function ($scope, PlaylistFactory) {

    //must .then because PlaylistFactory.get() is asyncronous and we need to wait for promise to come back before assigning its value to $scope.playlists
    PlaylistFactory.fetchAll()
    .then(function(playlists) {
        $scope.playlists = playlists;
        console.log("ALL OF OUR Playlists:", $scope.playlists)
    })
});




