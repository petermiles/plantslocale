angular
  .module("plantsApp")
  .controller("plantCtrl", function($scope, plantServ, wikiServ, flickrServ) {
    $scope.data = plantServ.data;
    $scope.submitInput = plantServ.sortData;
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
