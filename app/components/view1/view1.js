'use strict';

angular.module('myApp.view1', ['ui.router', 'common'])

    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('view1', {
            url: "/middlewarejobs",
            templateUrl: 'components/view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ['$scope', '$http', 'Job', '$timeout', '$sce', 'LOGGER',
        function ($scope, $http, Job, $timeout, $sce, LOGGER) {
            $scope.searchText = "";

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
                angular.forEach($scope.jobs, function (job) {
                    //LOGGER.log(job.name);
                    //LOGGER.log('isInProgress = ' + job.isInProgress);
                    if (job.isInProgress) {
                        result = true;
                    }
                });
                return result;
            }

            $scope.runJob = function runJob(job) {
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

            $scope.runAllJobs = function () {
                angular.forEach($scope.jobs, function (job) {
                    $scope.runJob(job);
                });
            };

            $scope.clearSearch = function clearSearch() {
                $scope.searchText = "";
            };

            $scope.showError = function showError(job) {
                if (job.showError) {
                    job.showError = false;
                } else if (job.error) {
                    job.showError = true;
                }
            };

            $scope.isJobInProgress = isJobInProgress;
            $scope.$watch('jobs', function (newVal, oldVal) {
                //LOGGER.log('changed');
                //LOGGER.log($scope.isJobInProgress())
            }, true);

            Job.getJobs().then(function (data) {
                $scope.jobs = data;
            });
        }
    ]);