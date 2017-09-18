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
        $scope.loading = false;
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

    $scope.loading = false;
    $scope.showIcon = function() {
      $scope.loading = true;
    };

    $scope.pullData = function(item) {
      wikiServ.pullData(item).then(function(response) {
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

    $scope.removeFromData = dataServ.removeFromData;
  });
