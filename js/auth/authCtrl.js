angular.module("plantsApp").controller("authCtrl", function() {
  $scope.writeData = function writeUserData(userId, name, email) {
    firebase
      .database()
      .ref("users/" + kSLsHviWgDNZ2KnG33mq0RQtQwQ2)
      .set({
        username: "Test",
        email: "Hello"
      });
  };
});
