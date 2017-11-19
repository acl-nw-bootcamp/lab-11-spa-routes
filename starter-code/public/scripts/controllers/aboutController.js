'use strict';

(function(module) {
  const aboutController = {};

  // TODO: Define a function that hides all main section elements, and then reveals just the #about section:
  aboutController.about = function() {
    console.log('start');
    articleView.initIndexPage();
    $('#articles').hide();
    $('#about').show();
}
  module.aboutController = aboutController;

})(window);
