'use strict';

// Declare app level module which depends on views, and components
angular
    .module('myApp', [
        'myApp.version',
        'common',
        'ui.bootstrap',
        'jobList'
    ])
    .controller('indexController', ['$scope', '$state', function ($scope, $state) {
        $scope.init = function () {
            $state.go('view1');
        };
    }])
    .value('isLogEnabled', true)
    .service('LOGGER', ['isLogEnabled', function (isLogEnabled) {
        this.log = function log(data) {
            if (isLogEnabled) {
                console.log(data);
            }
        }
    }])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('home', {
            url: '/',
            abstract: true
        });
        $stateProvider.state('middlewarejobs', {
            url: '/middlewarejobs',
            component: 'jobList',
            resolve: {
                mainJobTitle: function() {return 'Middleware Jobs';},
                jobs: function(Job) {
                    return Job.getJobs('mw_jobs');
                }
            },
            reloadOnSearch: false
        });

        $stateProvider.state('mccsjobs', {
            url: '/mccsjobs',
            component: 'jobList',
            resolve: {
                mainJobTitle: function() {return 'MCCS Jobs';},
                jobs: function(Job) {
                    return Job.getJobs('mccs_jobs');
                }
            },
            reloadOnSearch: false
        });

        $stateProvider.state('scheduledjobs', {
            url: '/scheduledjobs',
            component: 'jobList',
            resolve: {
                mainJobTitle: function() {return 'Scheduled Jobs';},
                jobs: function(Job) {
                    return Job.getJobs('scheduled_jobs');
                }
            },
            reloadOnSearch: false
        });
    }]);
