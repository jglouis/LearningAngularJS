'use strict';

var helloWorldControllers = angular.module('helloWorldControllers', []);

helloWorldControllers
        .controller('MainCtrl', ['$scope', '$location', '$http',
            function MainCtrl($scope, $location, $http) {
                $scope.message = "Hello World";
            }
        ])
        .controller('ShowCtrl', ['$scope', '$location', '$http',
            function ShowCtrl($scope, $location, $http) {
                $scope.message = "Show the world";
            }
        ])

