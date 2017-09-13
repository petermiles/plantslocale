angular.module("plantsApp").service("wikiServ", function(wikipediaFactory) {
  var self = this;
  self.pullData = function(item) {
    return wikipediaFactory
      .searchArticlesByTitle({
        term: item.sciname,
        exintro: 1
      })
      .then(function(response) {
        self.results = [];
        var index = 0;
        if (response.data.query) {
          for (var i = 0; i < response.data.query.pages.length; i++) {
            for (var key in response.data.query.pages[i]) {
              if (response.data.query.pages[i].title == item.sciname) {
                index = i;
              }
            }
            self.results.push(response.data.query.pages[2].extract);
            return self.results;
          }
        } else {
          self.results.push(
            "Sorry, we couldn't find sufficient enough data on Wikipedia."
          );
          return self.results;
        }
      });
  };
});

// angular.module("plantsApp").service("wikiServ", function(wikipediaFactory) {
//   var self = this;
//   self.pullData = function(item) {
//     return wikipediaFactory
//       .searchArticlesByTitle({
//         term: item.sciname,
//         exintro: 1
//       })
//       .then(function(response) {
//         self.results = [];
//         var index = 0;
//         if (response.data.query) {
//           for (var i = 0; i < response.data.query.pages.length; i++) {
//             for (var key in response.data.query.pages[i]) {
//               if (response.data.query.pages[i].title == item.sciname) {
//                 index = i;
//               }
//             }
//             self.results.push(response.data.query.pages[2].extract);
//             return self.results;
//           }
//         } else {
//           self.results.push(
//             "Sorry, we couldn't find sufficient enough data on Wikipedia."
//           );
//           return self.results;
//         }
//       });
//   };
// });
