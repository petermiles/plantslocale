angular
  .module("plantsApp", ["ui.router", "firebase", "jtt_wikipedia", "jtt_flickr"])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");

    $stateProvider
      .state("home", {
        url: "/home",
        templateUrl: "views/home.html"
      })
      .state("search", {
        url: "/search",
        templateUrl: "views/search.html",
        controller: "plantCtrl"
      })
      .state("login", {
        url: "/login",
        templateUrl: "views/login.html",
        controller: "plantCtrl"
      });
  });
