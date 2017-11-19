'use strict';

(function(module) {
  const aboutController = {};

  // TODO: Define a function that hides all main section elements, and then reveals just the #about section:
  articleController.about = function() {
    articleView.initIndexPage();
    $('section').hide();
    $('#about').show();

  module.aboutController = aboutController;
})(window);
