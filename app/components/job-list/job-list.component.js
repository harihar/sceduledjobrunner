'use strict';

function JobListController($scope, $http, $timeout, $sce, LOGGER) {
    var __this = this;
    __this.searchText = "";

    function callUrl(job) {
        $http.get(job.url).then(function success() {
            // LOGGER.log(response);
            job.error = false;
            job.errorMessage = null;
        }).catch(function error(error) {
            //LOGGER.log(error);
            job.error = true;
            var errorMessage = '<p>' + job.url + '</p>';
            errorMessage += error.status ? '<p>Status: ' + error.status + '</p>' : '';
            errorMessage += 'Error: ' + (error.data.message || error.data);
            job.errorMessage = $sce.trustAsHtml(errorMessage);
        }).finally(function () {
            job.isInProgress = false;
        });
    }

    function isJobInProgress() {
        var result = false;
        angular.forEach(__this.jobs, function (job) {
            //LOGGER.log(job.name);
            //LOGGER.log('isInProgress = ' + job.isInProgress);
            if (job.isInProgress) {
                result = true;
            }
        });
        return result;
    }

    __this.runJob = function runJob(job) {
        if (job.isInProgress) {
            return;
        }
        LOGGER.log('url requested: ' + job.url);
        job.isInProgress = true;
        job.error = false;
        job.showError = false;

        $timeout(function () {
            LOGGER.log('fake wait');
            callUrl(job);
        }, 14000);

    };

    __this.runAllJobs = function () {
        angular.forEach(__this.jobs, function (job) {
            __this.runJob(job);
        });
    };

    __this.clearSearch = function clearSearch() {
        __this.searchText = "";
    };

    __this.toggleShowError = function toggleShowError(job) {
        if (job.showError) {
            job.showError = false;
        } else if (job.error) {
            job.showError = true;
        }
    };

    __this.isJobInProgress = isJobInProgress;

}

angular
    .module('jobList')
    .component('jobList', {
        bindings: {
            mainJobTitle: '@',
            jobs: '<'
        },
        controller: ['$scope', '$http', '$timeout', '$sce', 'LOGGER', JobListController],
        templateUrl: 'components/job-list/job-list.template.html'
    });