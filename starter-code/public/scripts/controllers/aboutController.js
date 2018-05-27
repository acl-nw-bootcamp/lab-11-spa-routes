'use strict';

(function(module) {
  const aboutController = {};

  // TODOne: Define a function that hides all main section elements, and then reveals just the #about section:
  aboutController.initAboutPage = () =>  {
      $('#articles').hide();
      $('#about').fadeIn();
  }

  module.aboutController = aboutController;
})(window);
