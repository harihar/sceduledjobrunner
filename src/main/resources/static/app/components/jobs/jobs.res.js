angular.module('jobManagement')
    .factory('JobRes', ['$resource',
        function($resource){
            return $resource('app/data/:jobId.json', {}, {
                query: {
                    method: 'GET',
                    params: {jobId: 'jobs'},
                    isArray: true
                }
            });
        }
    ]);