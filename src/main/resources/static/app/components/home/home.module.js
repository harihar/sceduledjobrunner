(function() {
    'use strict';

    angular
        .module('home', [
            'ui.router',
            'ui.bootstrap',
            'jobManagement'
        ])
        .config(['$stateProvider', '$urlRouterProvider', config]);

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/middlewarejobs');

        $stateProvider.state('home', {
            abstract: true,
            url: '',
            templateUrl: 'app/components/home/home.template.html',
            controller: function ($state) {
                $state.go('.middlewarejobs');
            }
        });

        $stateProvider.state('home.middlewarejobs', {
            url: '/middlewarejobs',
            component: 'jobRunner',
            resolve: {
                mainJobTitle: function () {
                    return 'Middleware Jobs';
                },
                data: function (Job) {
                    return Job.getData('MW');
                }
            }
        });

        $stateProvider.state('home.mccsjobs', {
            url: '/mccsjobs',
            component: 'jobRunner',
            resolve: {
                mainJobTitle: function () {
                    return 'MCCS Jobs';
                },
                data: function (Job) {
                    return Job.getData('MCCS');
                }
            }
        });

        $stateProvider.state('home.scheduledjobs', {
            url: '/scheduledjobs',
            component: 'jobRunner',
            resolve: {
                mainJobTitle: function () {
                    return 'Scheduled Jobs';
                },
                data: function (Job) {
                    return Job.getData('OTHER_SCHEDULED');
                }
            }
        });

        $stateProvider.state('home.jobsmonitor', {
            url: '/jobsmonitor',
            component: 'jobsMonitor',
            resolve: {
                tableData: function(Job) {
                    return Job.getAll();
                }
            }
        });
    }
})();