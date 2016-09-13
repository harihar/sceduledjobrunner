(function () {
    'use strict';

    angular
        .module('myApp', [
            'ui.router',
            'ui.bootstrap',
            'common',
            'home',
            'jobManagement'
        ])
        .value('isLogEnabled', true)
        .service('LOGGER', ['isLogEnabled', function (isLogEnabled) {
            this.log = function log(data) {
                if (isLogEnabled) {
                    console.log(data);
                }
            }
        }])
        .value("sitepath", window.location.protocol + '//' + window.location.host + window.location.pathname)
        .run(['$state', function ($state) {
            //for initializing the $state when app is triggered by hitting bookmark
        }]);
})();