angular
  .module("plantsApp")
  .controller("plantCtrl", function(
    $scope,
    plantServ,
    wikipediaFactory,
    flickrFactory
  ) {
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

      flickrFactory
        .getImagesByTags({
          tags: item.sciname,
          tagmode: "<any>"
        })
        .then(function(_data) {
          console.log(_data);
        })
        .catch(function(_data) {
          //on error
        });
    };
  });
