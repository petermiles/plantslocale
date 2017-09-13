angular.module("plantsApp").controller("wikiCtrl", function($scope, wikiServ) {
  $scope.pullData = function(item) {
    wikiServ.pullData(item).then(function(response) {
      $scope.wiki = response;
    });
  };
});
