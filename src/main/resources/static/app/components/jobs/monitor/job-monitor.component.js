(function () {
    'use strict';

    function JobMonitorController(NgTableParams) {
        var __this = this;
        var counts = [20, 50];
        __this.tableParams = new NgTableParams({
            count: counts[0],
            sorting: { name: "asc" }
        }, {
            counts: counts,
            dataset: __this.tableData
        });
    }

    angular
        .module('jobManagement')
        .component('jobsMonitor', {
            bindings: {
                tableData: '<'
            },
            controller: ['NgTableParams', JobMonitorController],
            templateUrl: 'app/components/jobs/monitor/job-monitor.template.html'
        });
})();