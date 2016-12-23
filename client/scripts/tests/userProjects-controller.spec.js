describe('Controller: UserProjectsController', function() {
  beforeEach(module('Weddist'));

  var $controller;

  beforeEach(inject(function(_$controller_) {
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('vm.projects', function() {
    it('Should have length 10', function() {
      var $scope = {};
      var controller = $controller('UserProjectsController', {
        $scope: $scope
      });

      expect(controller.projects.length).toEqual(10);
    });
  });
});
