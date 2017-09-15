angular.module("plantsApp").service("dataServ", function($firebaseArray) {
  this.saveData = function(data) {
    var referenceData = data;
    console.log(referenceData);
    var ref = firebase
      .database()
      .ref()
      .child("users/" + firebase.auth().currentUser.uid + "/watchlist");
    var database = $firebaseArray(ref);

    database.$save(referenceData).then(function(response) {
      console.log("added");
    });
  };
});
