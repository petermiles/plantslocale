angular
  .module("plantsApp")
  .service("plantServ", function($firebaseObject, $firebaseArray) {
    //Sorts Data by County Provided//
    var self = this;
    this.sortData = function(state, county) {
      var ref = firebase
        .database()
        .ref()
        .child(state);
      var arr = $firebaseArray(ref);

      return arr.$loaded().then(function(response) {
        self.results = [];
        if (county) {
          for (var i = 0; i < response.length; i++) {
            if (response[i].county.includes(county)) {
              self.results.push(response[i]);
            }
          }
          return self.results;
        }
      });
    };
  });
