(function() {
  "use strict";

  function pricingHandler($scope, User) {
    var vm = this;

    // TODO: use vm
    $scope.imagePath = "../../images/image.jpg";
    $scope.imagePathTwo = "../../images/image2.png";
  }


  angular.module("Weddist.Controllers")
    .controller("PricingController", ["$scope", "User", pricingHandler]);
}());
