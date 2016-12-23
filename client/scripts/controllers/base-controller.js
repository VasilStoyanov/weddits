(function() {
  "use strict";

  function baseHandler($scope, $mdDialog, $location, User) {
    var bm = this;

    bm.user = {};
    bm.userLoggedIn = User.isAuthenticated();

    if (bm.userLoggedIn) {
      User.getCurrent(function(user) {
        bm.user.email = user.email;
        $location.path("/projects");
      });
    };


    bm.logOutCurrentUser = function() {
      bm.user = {};
      bm.userLoggedIn = false;
      User.logout();
      $location.path("/");
    };

    bm.showTabDialog = function(ev) {
      $mdDialog.show({
        controller: "NewProjectController",
        templateUrl: "../views/templates/new-project.html",
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true
      });
    };
  }

  angular.module("Weddist.Controllers")
    .controller("BaseController", [
      "$scope",
      "$mdDialog",
      "$location",
      "User",
      baseHandler
    ]);
}());
