angular
  .module("plantsApp")
  .controller("plantCtrl", function(
    $scope,
    plantServ,
    wikiServ,
    flickrServ,
    dataServ,
    $firebaseArray
  ) {
    $scope.submitInput = function(state, county) {
      plantServ.sortData(state, county).then(function(response) {
        $scope.data = response;
      });
    };
    $scope.flickrData = function(item) {
      flickrServ.pullData(item).then(function(response) {
        $scope.flickrSrc = response;
        $scope.show = true;
      });
    };
    $scope.flickrSrc = flickrServ.wikiResults;

    $scope.pendingData = function() {
      $scope.dataLoaded = true;
      console.log("hello");
    };
    $scope.pullData = function(item) {
      wikiServ.pullData(item).then(function(response) {
        $scope.dataLoaded = true;
        $scope.wiki = response;
      });
    };

    $scope.saveData = dataServ.saveData;

    $scope.pullWatchlist = function(userId) {
      dataServ.pullWatchlist(userId).then(function(response) {
        $scope.watchList = response;
      });
    };
    $scope.show = false;
    $scope.showCard = function(card) {
      $scope.selected = card;
    };

    $("#loadingIcon").on;

    $scope.removeFromData = dataServ.removeFromData;
  });
