app.config(function ($stateProvider) {
    $stateProvider.state('newPlaylist', {
        url: '/playlists/new',
        templateUrl: '/templates/addPlaylist.html',
        controller: 'PlaylistsCtrl'
    });
});