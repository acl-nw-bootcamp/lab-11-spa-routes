'use strict';

(function(module) {
  const articleController = {};
  // TODO DONE: Setup a function that kicks off the fetching and rendering of articles, using the same
  // code that used to be in index.html.
  // Also be sure to hide all the main section elements, and reveal the #articles section:
  articleController.index = function () {
    articleView.initIndexPage();

      $('.tab-content').hide();
      $('#articles').show();

  };

  module.articleController = articleController;
})(window);
