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
     $scope.todos = [
       {name: 'Item 1'},
       {name: 'Item 2'},
       {name: 'Item 3'},
     ];
     $scope.addTodo = function () {
       $scope.todos.push({name: $scope.todoName});
       $scope.todoName = '';
     };
     $scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);
    };
   });
