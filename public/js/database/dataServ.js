angular
  .module("plantsApp")
  .service("dataServ", function($firebaseArray, $firebaseObject) {
    this.saveData = function(data) {
      var userId = firebase.auth().currentUser.uid;
      var ref = firebase.database().ref(`users/${userId}/watchlist`);

      var database = $firebaseArray(ref);

      database.$add(data).then(function(ref) {
        console.log("added");
      });
    };

    this.pullWatchlist = function(userId) {
      var userId = firebase.auth().currentUser.uid;
      var ref = firebase.database().ref(`users/${userId}/watchlist`);
      var database = $firebaseArray(ref);

      console.log(typeof database);
      console.log(database);

      return database.$loaded().then(function(response) {
        this.watchList = response;
        return watchList;
      });
    };
  });
