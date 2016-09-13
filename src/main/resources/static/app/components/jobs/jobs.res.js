angular.module('jobManagement')
    .factory('JobRes', ['$resource', 'sitepath',
        function($resource, sitepath){
            return $resource(sitepath + 'runnablejobs', {}, {
                query: {
                    method: 'GET',
                    isArray: true
                }
            });
        }
    ]);