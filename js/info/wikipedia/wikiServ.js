angular.module("plantsApp").service("wikiServ", function(wikipediaFactory) {
  var self = this;
  self.pullData = function(item) {
    self.results = [];
    wikipediaFactory
      .searchArticlesByTitle({
        term: item.sciname,
        exintro: 1
      })
      .then(function(response) {
        self.results.push(response.data.query.pages[0].extract);
        console.log(self.results);
      })
      .catch(function(_data) {
        //on error
      });
  };
});
