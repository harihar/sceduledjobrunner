angular.module('common')
    .factory('Job', ['JobRes', '$q', function job(JobRes, $q) {
        var functions = {};

        functions.getJobs = function getJobs(jobType) {
            var deferred = $q.defer();
            JobRes.query({jobId: jobType}, function(response){
                //response.forEach(function(job){
                //    job.isInProgress = false;
                //    job.error = false;
                //    job.errorMessage = null;
                //});

                deferred.resolve(response);
            });
            return deferred.promise;
        };
        return functions;
    }
    ]);