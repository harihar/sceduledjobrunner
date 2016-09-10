angular.module('jobList')
    .factory('Job', ['JobRes', '$q', function job(JobRes, $q) {
        var jobCache = {};
        var functions = {};

        functions.getJobs = function getJobs(jobType) {
            var deferred = $q.defer();
            if (jobCache[jobType]) {
                deferred.resolve(jobCache[jobType]);
            } else {
                JobRes.query({jobId: jobType}, function (response) {
                    jobCache[jobType] = response;
                    deferred.resolve(response);
                });
            }
            return deferred.promise;
        };
        return functions;
    }
    ]);