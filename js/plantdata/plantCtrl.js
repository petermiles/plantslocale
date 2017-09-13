angular
  .module("plantsApp")
  .controller("plantCtrl", function($scope, plantServ, wikiServ, flickrServ) {
    $scope.data = plantServ.data;
    $scope.submitInput = plantServ.sortData;
    $scope.pullData = flickrServ.pullData;
    $scope.pullData = function(item) {
      wikiServ.pullData(item).then(function(response) {
        $scope.wiki = response;
      });
    };
  });
