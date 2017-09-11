angular
  .module("plantsApp")
  .service("plantServ", function($firebaseObject, $firebaseArray) {
    var ref = firebase.database().ref();
    var obj = $firebaseObject(ref);
    this.sortData = function(state, county) {
      this.data = obj[state];
      this.data2 = [];
      if (county) {
        for (var i = 0; i < this.data.length; i++) {
          for (var j = 0; j < this.data[i].county.split(",").length; j++) {
            if (this.data[i].county.split(",")[j] === county) {
              this.data2.push(this.data[i]);
            }
          }
        }
        this.data = this.data2;
      }
    };
  });
