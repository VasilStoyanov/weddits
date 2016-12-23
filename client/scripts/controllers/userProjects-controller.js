(function() {
  "use strict";

  function userProjectsHandler($scope, $mdDialog) {
    var pm = this;

    $scope.wtf = ['az', 'ti', 'toi'];
    // Returns a value for the background-color style
    pm.getColor = function(index) {
      if (index % 2 === 0) {
        return "#f0f0f0";
      }

      return "white";
    };

    pm.showDetails = function(project) {
      $mdDialog.show({
        locals: {
          selectedProject: project
        },
        controller: ['$scope', 'selectedProject', function($scope, selectedProject) {
          $scope.name = selectedProject.name;
          $scope.finishDate = selectedProject.finishDate;
          $scope.status = selectedProject.status;
        }],
        templateUrl: "../views/templates/current-project-details.html",
        parent: angular.element(document.body),
        clickOutsideToClose: true
      });
    };

    // DUMMY DATA
    pm.projects = [{
      name: "Project 1",
      status: "Completed",
      finishDate: "10.10.2016",
      description: "None"
    }, {
      name: "Project 2",
      status: "Received",
      finishDate: "05.06.2016",
      description: "None"
    }, {
      name: "Project 3",
      status: "Processing",
      finishDate: "01.12.2016",
      description: "None"
    }, {
      name: "Project 4",
      status: "Finalizing",
      finishDate: "09.07.2016",
      description: "None"
    }, {
      name: "Project 5",
      status: "Processing",
      finishDate: "31.02.2016",
      description: "None"
    }, {
      name: "Project 6",
      status: "Received",
      finishDate: "31.02.2016",
      description: "None"
    }, {
      name: "Project 7",
      status: "Processing",
      finishDate: "31.02.2016",
      description: "None"
    }, {
      name: "Project 8",
      status: "Finalizing",
      finishDate: "31.02.2016",
      description: "None"
    }, {
      name: "Project 9",
      status: "Processing",
      finishDate: "31.02.2016",
      description: "None"
    }, {
      name: "Very long project name",
      status: "Completed",
      finishDate: "31.02.2016",
      description: "None"
    }];
  }

  angular.module("Weddist.Controllers")
    .controller("UserProjectsController", ["$scope", "$mdDialog", userProjectsHandler]);
}());
