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
        __this.statusOptions = collectUniquePropertyValues(__this.tableData, 'status');
        __this.jobGroupOptions = collectUniquePropertyValues(__this.tableData, 'jobGroup');
        __this.enabledOptions = [
            {id: true, title: 'Enabled'},
            {id: false, title: 'Disabled'}
        ];
    }

    function collectUniquePropertyValues(data, property) {
        var result = [];
        data.forEach(function(element, index, array) {
            var exists = false;
            result.forEach(function(elem, idx, arr){
                if(element[property] === elem.id) {
                    exists = true;
                }
            });

            if(!exists && element[property]) {
                result.push({id:element[property], title:element[property]});
            }
        });
        return result;
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