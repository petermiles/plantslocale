angular.module("plantsApp").service("flickrServ", function(flickrFactory) {
  this.pullData = function(item) {
    return flickrFactory
      .getImagesByTags({
        tags: item.sciname,
        tagmode: "all"
      })
      .then(function(response) {
        if (response.data.items.length > 0) {
          this.wikiResults = response.data.items[0].media.m;
          return this.wikiResults;
        } else {
          this.wikiResults = "http://via.placeholder.com/250x250";
          return this.wikiResults;
        }
      });
  };
});
