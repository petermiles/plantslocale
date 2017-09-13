angular
  .module("plantsApp")
  .controller("flickrCtrl", function($scope, flickrServ) {
    $scope.flickrSrc = flickrServ.wikiResults;
    console.log($scope.flickrSrc);
    $scope.flickrData = function(item) {
      flickrServ.pullData(item).then(function(response) {
        $scope.flickr = response;
      });
    };
  });
