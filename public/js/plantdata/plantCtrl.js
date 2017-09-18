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
    $scope.loadingWL = false;
    $scope.showIcon = function() {
      $scope.loading = true;
    };

    // $scope.showWLIcon = function() {
    //   $scope.loadingWL = true;
    // };

    $scope.pullData = function(item) {
      wikiServ.pullData(item).then(function(response) {
        $scope.loading = false;
        $scope.wiki = response;
      });
    };

    $scope.saveData = dataServ.saveData;

    $scope.pullWatchlist = function(userId) {
      $scope.loadingWL = true;
      dataServ.pullWatchlist(userId).then(function(response) {
        $scope.watchList = response;
        $scope.loadingWL = false;
      });
    };
    $scope.show = false;
    $scope.showCard = function(card) {
      $scope.show2 = true;
      $scope.value = 10;
      $scope.noob = function() {
        $scope.count = $scope.value;
        $scope.value += 10;
        if ($scope.value - 10 <= card.length) {
          $scope.value += 10;
        } else {
          $scope.value = card.length;
          $scope.count = card.length - 10;
        }

        $scope.selected = [];
        for (let i = $scope.count; i < $scope.value; i++) {
          $scope.selected.push(card[i]);
        }
      };
      $scope.selected = [];
      for (let i = 0; i < $scope.value; i++) {
        $scope.selected.push(card[i]);
      }

      $scope.loadingWL = false;
    };

    $scope.removeFromData = dataServ.removeFromData;
  });
