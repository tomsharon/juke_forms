app.controller('PlaylistsCtrl', function ($scope, PlaylistFactory) {

$scope.submit = function(){

    console.log(" i made a new playlist", $scope.playlist)
    //$scope.playlist was defined by ng-model
    PlaylistFactory.create($scope.playlist)
    $scope.playlist = {
        name: " "
    };

}





});