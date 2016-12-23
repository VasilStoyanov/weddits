(function() {
  "use strict";

  function projectHandler($scope) {
    var vm = this;

    vm.showHddOptions = false;

    vm.hddOptions = function(state) {
      vm.showHddOptions = state;
    }
  }

  angular.module("Weddist.Controllers")
    .controller("NewProjectController", ["$scope", projectHandler]);
}());
