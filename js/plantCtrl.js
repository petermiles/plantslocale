angular
  .module("plantsApp")
  .controller("plantCtrl", function($scope, $firebaseObject, $firebaseArray) {
    var ref = firebase.database().ref();
    var obj = $firebaseObject(ref);
    obj.$loaded().then(function() {
      // $scope.data = obj["Washington"]["Abies"];
      // console.log(obj);
    });

    $scope.submitInput = function(state, county) {
      $scope.data = obj[state];
      // console.log($scope.data);
      // if($scope.data[state].length)
      // console.log($scope.data.Nevada[0].county.split(","));
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
