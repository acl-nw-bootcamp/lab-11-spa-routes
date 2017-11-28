'use strict';

(function(module) {
  const aboutController = {};

    aboutController.index = function() {
      $('.tab-content').hide();
      $('#about').show();
    };

  // TODO DONE: Define a function that hides all main section elements, and then reveals just the #about section:
  module.aboutController = aboutController;
})(window);
