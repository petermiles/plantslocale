angular
  .module("plantsApp")
  .controller("plantCtrl", function($scope, plantServ, wikiServ) {
    $scope.data = plantServ.data;
    $scope.submitInput = plantServ.sortData;
    $scope.wiki = wikiServ.results;
    $scope.pullData = wikiServ.pullData;

    $scope.test = "test";
  });
