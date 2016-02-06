'use strict';

describe('Controller: HexmapCtrl', function () {

  // load the controller's module
  beforeEach(module('learningAngularJsApp'));

  var HexmapCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HexmapCtrl = $controller('HexmapCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(HexmapCtrl.awesomeThings.length).toBe(3);
  });
});