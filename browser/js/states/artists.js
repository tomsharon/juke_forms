app.config(function ($stateProvider) {
	$stateProvider.state('artists', {
		url: '/artists',
		templateUrl: '/templates/artists.html',
		controller: 'ArtistsCtrl',
		resolve: {
			allArtists: function (ArtistFactory) {
				return ArtistFactory.fetchAll();
			}
		}
	});
});

// What does `resolve` do? Well, instead of putting promise-based logic in our controllers, we can tell UI-Router to do that promise logic for us, and only load the state once the promise has ​_resolved_​. Then it injects the data from that promise into the controller as one of the injected values.

// It’s not 100% critical that you understand how to use UI-Router’s `resolve` property but it is definitely encouraged as it can simplify a lot of your controller logic — removing the apparent async stuff. Of course there are downsides, e.g. not transitioning to a state until a relatively slow AJAX call resolves, more complex error handling, etc. But it also prevents a “flash of unpopulated content.”