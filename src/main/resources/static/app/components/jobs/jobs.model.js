angular.module('jobManagement')
    .service('Job', ['JobRes', '$q', function job(JobRes, $q) {
        var jobCache = {};
        this.getData = function getJobs(jobGroupId) {
            var deferred = $q.defer();
            var jobGroup = jobCache[jobGroupId];
            if (jobGroup) {
                deferred.resolve(jobGroup);
            } else {
                jobCache[jobGroupId] = {};
                JobRes.query({jobId: jobGroupId}, function (response) {
                    jobCache[jobGroupId].jobs = response;
                    deferred.resolve(jobCache[jobGroupId]);
                });
            }
            return deferred.promise;
        };
    }
    ]);