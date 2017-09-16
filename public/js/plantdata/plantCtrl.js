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
      });
    };
    $scope.flickrSrc = flickrServ.wikiResults;

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

    // $scope.showCard = dataServ.showCard;
    $scope.showCard = function(card) {
      console.log(card);
      $scope.selected = card;
    };
    // function(id) {
    //   dataServ.pullWatchlist(id).then(function(response) {
    //     $scope.watchList = response;
    //   });
    // };
  });
