angular.module("plantsApp").service("plantServ"),
  function($http) {
    var baseUrl =
      "https://plantslocale.firebaseio.com/.json?auth=Wx8KObP2HGrXWvQ69meaoSsDWIshlRFcTTNyvOAA";

    this.getPlants = function() {
      return $http.get(baseUrl);
    };
  };
