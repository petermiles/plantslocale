angular
  .module("plantsApp")
  .controller("plantCtrl", function($scope, plantServ) {
    $scope.data = plantServ.data;
    $scope.submitInput = plantServ.sortData;
  });
