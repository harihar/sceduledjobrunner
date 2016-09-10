(function() {
    'use strict';

    angular
        .module('home', [
            'ui.router',
            'common',
            'ui.bootstrap',
            'jobList'
        ])
        .config(['$stateProvider', '$urlRouterProvider', config]);

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/middlewarejobs');

        $stateProvider.state('home', {
            abstract: true,
            url: '',
            templateUrl: 'components/home/home.template.html',
            controller: function ($state) {
                $state.go('.middlewarejobs');
            }
        });

        $stateProvider.state('home.middlewarejobs', {
            url: '/middlewarejobs',
            component: 'jobList',
            resolve: {
                mainJobTitle: function () {
                    return 'Middleware Jobs';
                },
                jobs: function (Job) {
                    return Job.getJobs('mw_jobs');
                }
            }
        });

        $stateProvider.state('home.mccsjobs', {
            url: '/mccsjobs',
            component: 'jobList',
            resolve: {
                mainJobTitle: function () {
                    return 'MCCS Jobs';
                },
                jobs: function (Job) {
                    return Job.getJobs('mccs_jobs');
                }
            }
        });

        $stateProvider.state('home.scheduledjobs', {
            url: '/scheduledjobs',
            component: 'jobList',
            resolve: {
                mainJobTitle: function () {
                    return 'Scheduled Jobs';
                },
                jobs: function (Job) {
                    return Job.getJobs('scheduled_jobs');
                }
            }
        });
    }
})();