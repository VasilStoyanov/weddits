(function() {
  "use strict";

  function registerationHandler($scope, $location, User) {
    var vm = this,
      parentController = $scope.$parent;

    vm.createUser = function(newUser) {
      var userToRegister = {
        "email": newUser.email,
        "password": newUser.password
      }

      User.create(userToRegister, function(err, user) {
        User.login(userToRegister, function(user) {
          User.getCurrent(function(user) {
            parentController.bm.user.email = user.email;
            parentController.bm.userLoggedIn = true;
            $location.path("/projects");
          });
        });
      });
    };
  };

  angular.module("Weddist.Controllers")
    .controller("RegistrationController", [
      "$scope",
      "$location",
      "User",
      registerationHandler
    ]);
}());
