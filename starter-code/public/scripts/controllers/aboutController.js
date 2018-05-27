'use strict';

(function(module) {
  const aboutController = {};

  // TODONE: Define a function that hides all main section elements, and then reveals just the #about section:
  aboutController.show = function() {
  $('.tab-content').hide();
  $('#about').show();
}
  module.aboutController = aboutController;
})(window);
