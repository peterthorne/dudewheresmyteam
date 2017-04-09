    'use strict';
    
    var app = angular.module('app', ['ngRoute'])
        .config(function($routeProvider) {
            $routeProvider.when('/teammembers', {
                templateUrl:'src/client/app/team/team.template.html',
                controller:'teamController'
            });
            $routeProvider.otherwise( {
                redirectTo:'/teammembers'
            });
        });
