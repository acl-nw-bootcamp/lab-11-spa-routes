'use strict';

(function(module) {
  const aboutController = {};
  aboutController.show = () => {
    $("main > section").hide();
    $("#about").show();
  };


  // TODO: Define a function that hides all main section elements, and then reveals just the #about section:


  module.aboutController = aboutController;
})(window);
