(function() {
  "use strict";

  var CONTROLLER_AS_VIEW_MODEL = "vm",
    PROJECTS_MODEL = "pm";

  if (!angular && !angular.module) {
    console.error("AngularJS is not loaded.");
    return;
  }

  function configureApp($mdThemingProvider, $routeProvider, $locationProvider, $mdIconProvider) {
    // Configure material design theme colors
    $mdThemingProvider.theme("default")
      .primaryPalette("indigo")
      .accentPalette("amber")
      .warnPalette("pink");

    // Configure routes
    $routeProvider
      .when("/", {
        templateUrl: "../views/partials/login.html",
        controller: "LoginController",
        controllerAs: CONTROLLER_AS_VIEW_MODEL
      })
      .when("/register", {
        templateUrl: "../views/partials/register.html",
        controller: "RegistrationController",
        controllerAs: CONTROLLER_AS_VIEW_MODEL
      })
      .when("/balance", {
        templateUrl: "../views/partials/balance.html",
        controller: "PricingController",
        controllerAs: CONTROLLER_AS_VIEW_MODEL
      })
      .when("/projects", {
        templateUrl: "../views/partials/projects.html",
        controller: "UserProjectsController",
        constrollerAs: PROJECTS_MODEL
      })
      .when("/login", {
        templateUrl: "../views/partials/login.html"
      })
      .otherwise({
        redirectTo: "/"
      });

    // Remove the ugly '#'
    $locationProvider.html5Mode(true);
  };

  function runApp() {};

  angular.module("Weddist.Services", []);
  angular.module("Weddist.Controllers", [
    "Weddist.Services",
    "ngMaterial"
  ]);

  // Main module
  angular
    .module("Weddist", [
      "Weddist.Services",
      "Weddist.Controllers",
      "ngResource",
      "lbServices",
      "ngMaterial",
      "ngRoute"
    ])
    .config(configureApp)
    .run(runApp);

}());
