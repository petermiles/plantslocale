"use strict";
angular.module("plantsApp").directive("navbar", function() {
  return {
    restrict: "E",
    templateUrl: "./views/navbar.html",
    controller: function($scope, $location) {
      $scope.isActive = function(path) {
        var currentPath = $location.path().split("/")[1];
        if (currentPath.indexOf("?") !== -1) {
          currentPath = currentPath.split("?")[0];
        }
        return currentPath === path.split("/")[1];
      };
    }
  };
});
