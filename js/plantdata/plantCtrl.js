angular
  .module("plantsApp")
  .controller("plantCtrl", function(
    $scope,
    plantServ,
    wikiServ,
    flickrServ,
    $firebaseArray
  ) {
    // $scope.data = plantServ.results;
    $scope.submitInput = function(state, county) {
      plantServ.sortData(state, county).then(function(response) {
        $scope.data = response;
      });
    };

    $scope.flickrData = function(item) {
      flickrServ.pullData(item).then(function(response) {
        $scope.flickrSrc = response;
      });
    };
    $scope.flickrSrc = flickrServ.wikiResults;
    $scope.pullData = function(item) {
      wikiServ.pullData(item).then(function(response) {
        $scope.wiki = response;
      });
    };
  });
