'use strict';

(function(module) {
  const articleController = {};
  // TODONE: Setup a function that kicks off the fetching and rendering of articles, using the same
  // code that used to be in index.html.
  // Also be sure to hide all the main section elements, and reveal the #articles section:
  articleController.home = function () {
  $('.tab-content').hide();
  Article.fetchAll(articleView.initIndexPage);
  $('#articles').show();
  }
  
  module.articleController = articleController;
})(window);
