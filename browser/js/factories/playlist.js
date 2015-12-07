app.factory('PlaylistFactory', function ($http) {

    // var PlaylistFactory = {};

    // PlaylistFactory.create = function (data) {
    //     return $http.post('/api/playlists', data)
    //     .then(function (response) {
    //         console.log("Created playlist: ", response)
    //         return response.data;
    //     });
    // };

    // PlaylistFactory.get = function() {
    //     return $http.get("/api/playlists")
    //     .then(function(response) {
    //         console.log("Retrieved playlists: ", response)
    //         return response.data;
    //     })
    // }

    var cachedPlaylists = [];

    var PlaylistFactory = {};

    PlaylistFactory.fetchAll = function () {
        return $http.get('/api/playlists')
        .then(function (response) {
            angular.copy(response.data, cachedPlaylists);
            return cachedPlaylists;
        });
    };

//angular.copy systemayically replaces the contents of cachedPlaylists with whatever we fetch this time.

//Before angular.copy the sidebar was fetching a new copy of an object each time
//After angular.copy the sidebar has a pointer to a specific array, and the sidebar reflects modifications, since arrays are passed by reference

//Before, when we were just fetching a copy. When we updated our playlists, that update was not reflected in the previous copy.
//After, since we definied playlistFactory on line 23, and push shit into it, changes are reflected in our view.

//Angular.copy takes all of the keys of input 1 (response.data) and adds them to input 2 (cachedPlaylists)

    PlaylistFactory.create = function (data) {
        return $http.post('/api/playlists', data)
        .then(function (response) {
            var playlist = response.data
            cachedPlaylists.push(playlist);
            return playlist;
        });
    };

    PlaylistFactory.fetchOne = function(id) {
        return $http.get("/api/playlists/" + id)
        .then(function(playlist) {
            return playlist
        })
    }










































    return PlaylistFactory;

});