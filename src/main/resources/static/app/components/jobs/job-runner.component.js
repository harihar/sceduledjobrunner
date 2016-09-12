(function() {
    'use strict';


    function JobRunnerController($http, $timeout, $sce, $filter, LOGGER) {
        var __this = this;

        function getErrorMessage(job, error) {
            var errorMessage = '<p>' + job.url + '</p>';
            errorMessage += error.status ? '<p>Status: ' + error.status + (error.statusText ? ' (' + error.statusText + ')' : '') + '</p>' : '';
            errorMessage += 'Error message: ' + (error.data ? error.data.message : error.data);
            return errorMessage;
        }

        function callUrl(job) {
            $http.get(job.url).then(function success() {
                // LOGGER.log(response);
                job.error = false;
                job.errorMessage = null;
            }).catch(function error(error) {
                //LOGGER.log(error);
                job.error = true;
                var errorMessage = getErrorMessage(job, error);
                job.errorMessage = $sce.trustAsHtml(errorMessage);
            }).finally(function () {
                job.isInProgress = false;
            });
        }

        function isJobInProgress() {
            var result = false;
            angular.forEach(__this.data.jobs, function (job) {
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
            }, 500);

        };

        __this.runAllJobs = function () {
            var filtered = $filter('filter')(__this.data.jobs, {name: __this.data.searchText});

            angular.forEach(filtered, function (job) {
                __this.runJob(job);
            });
        };

        __this.clearSearch = function clearSearch() {
            __this.data.searchText = "";
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
        .module('jobManagement')
        .component('jobRunner', {
            bindings: {
                mainJobTitle: '@',
                data: '<'
            },
            controller: ['$http', '$timeout', '$sce', '$filter', 'LOGGER', JobRunnerController],
            templateUrl: 'app/components/jobs/job-runner.template.html'
        });
})();