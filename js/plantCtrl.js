angular
  .module("plantsApp")
  .controller("plantCtrl", function($scope, $firebaseObject, $firebaseArray) {
    var ref = firebase.database().ref();
    var obj = $firebaseObject(ref);

    $scope.data = obj.$loaded().then(function() {
      $scope.data = obj;
    });
  });
