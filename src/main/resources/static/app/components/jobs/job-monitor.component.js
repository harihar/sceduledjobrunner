(function () {
    'use strict';
    angular
        .module('jobManagement')
        .component('jobsMonitor', {
            controller: function JobMonitorController(sitepath) {
                this.sitepath = sitepath;
            },
            templateUrl: 'app/components/jobs/job-monitor.template.html'
        });
})();