app.config(function ($stateProvider) {
    $stateProvider.state('newPlaylist', {
        url: '/addplaylist',
        templateUrl: '/templates/addPlaylist.html',
        controller: 'PlaylistsCtrl'
    });
});