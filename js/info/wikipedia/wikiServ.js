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
        for (var i = 0; i < response.data.query.pages.length; i++) {
          for (var key in response.data.query.pages[i]) {
            if (response.data.query.pages[i].title == item.sciname) {
              index = i;
            }
          }
        }
        self.results.push(response.data.query.pages[index].extract);
        return self.results;
      });
  };
});
