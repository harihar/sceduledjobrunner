(function () {
    'use strict';

    angular
        .module('myApp', [
            'ui.router',
            'ui.bootstrap',
            'common',
            'home',
            'jobList'
        ])
        .value('isLogEnabled', true)
        .service('LOGGER', ['isLogEnabled', function (isLogEnabled) {
            this.log = function log(data) {
                if (isLogEnabled) {
                    console.log(data);
                }
            }
        }])
        .run(['$state', function ($state) {
            //for initializing the $state when app is triggered by hitting bookmark
        }]);
})();