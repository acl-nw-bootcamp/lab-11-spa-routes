'use strict';

(function(module) {
  const aboutController = {};

  // TODOne: Define a function that hides all main section elements, and then reveals just the #about section:

  aboutController.body = function() {
    $('.tab-content').hide();
    $('#about').show();
  }

  module.aboutController = aboutController;
})(window);
