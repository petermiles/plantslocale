angular
  .module("plantsApp")
  .controller("wikiCtrl", function($scope, plantServ, wikipediaFactory) {
    $scope.data = plantServ.data;
    $scope.submitInput = plantServ.sortData;

    $scope.pullData = function(item) {
      $scope.wikiData = [];
      wikipediaFactory
        .searchArticlesByTitle({
          term: item.sciname,
          exintro: 1
        })
        .then(function(response) {
          console.log(response);
          $scope.wikiData.push(response.data.query.pages[0].extract);
        })
        .catch(function(_data) {
          //on error
        });
    };
  });
