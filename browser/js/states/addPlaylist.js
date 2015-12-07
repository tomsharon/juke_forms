app.config(function ($stateProvider) {
    $stateProvider.state('newPlaylist', {
        url: '/playlists/playlist/new',
        templateUrl: '/templates/addPlaylist.html',
        controller: 'addPlaylistsCtrl'
    });
});