angular
  .module("plantsApp")
  .controller("flickrCtrl", function($scope, flickrFactory) {
    $scope.pullData = function(item) {
      console.log("hello");
      return flickrFactory
        .getImagesByTags({
          tags: item.sciname
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(_data) {
          //on error
        });
    };
  });
