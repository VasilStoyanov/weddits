(function() {
  "use strict";

  function loginHandler($scope, $location, User) {
    var lm = this,
      parentController = $scope.$parent;

    lm.loginUser = function(user) {
      User.login(user, function(user) {
        User.getCurrent(function(user) {
          parentController.bm.user.email = user.email;
          parentController.bm.userLoggedIn = true;
          $location.path("/projects");
        });
      });
    };
  };

  angular.module("Weddist.Controllers")
    .controller("LoginController", [
      "$scope",
      "$location",
      "User",
      loginHandler
    ]);
}());
