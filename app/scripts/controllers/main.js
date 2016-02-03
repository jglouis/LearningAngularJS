'use strict';

/**
 * @ngdoc function
 * @name learningAngularJsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the learningAngularJsApp
 */
 angular.module('learningAngularJsApp')
   .controller('MainCtrl', function ($scope) {
     $scope.todos = [];
     $scope.addTodo = function () {
       $scope.todos.push({name: $scope.todoName});
       $scope.todoName = '';
     };
     $scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);
    };
   });
