angular.module('jobList')
    .factory('JobRes', ['$resource',
        function($resource){
            return $resource('data/:jobId.json', {}, {
                query: {
                    method: 'GET',
                    params: {jobId: 'jobs'},
                    isArray: true
                }
            });
        }
    ]);