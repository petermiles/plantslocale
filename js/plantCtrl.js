angular
  .module("plantsApp")
  .controller("plantCtrl", function($scope, $firebaseObject, $firebaseArray) {
    var ref = firebase.database().ref();
    var obj = $firebaseObject(ref);

    $scope.submitInput = function(state, county) {
      $scope.data = obj[state];
      $scope.data2 = [];
      if (county) {
        for (var i = 0; i < $scope.data.length; i++) {
          for (j = 0; j < $scope.data[i].county.split(",").length; j++) {
            if ($scope.data[i].county.split(",")[j] === county) {
              $scope.data2.push($scope.data[i]);
            }
          }
        }
        $scope.data = $scope.data2;
      }
    };
  });
