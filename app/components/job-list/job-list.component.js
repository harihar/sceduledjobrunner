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
            LOGGER.log(error);
            job.error = true;
            var url = '<p>' + job.url + '</p>';
            job.errorMessage = $sce.trustAsHtml(url + error.data.message);
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
        }, 500);

    };

    __this.runAllJobs = function () {
        angular.forEach(__this.jobs, function (job) {
            __this.runJob(job);
        });
    };

    __this.clearSearch = function clearSearch() {
        __this.searchText = "";
    };

    __this.showError = function showError(job) {
        if (job.showError) {
            job.showError = false;
        } else if (job.error) {
            job.showError = true;
        }
    };

    __this.isJobInProgress = isJobInProgress;
    $scope.$watch('jobs', function (newVal, oldVal) {
        //LOGGER.log('changed');
        //LOGGER.log(__this.isJobInProgress())
    }, true);

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