'use strict';

angular.module('myApp.view2', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
    $stateProvider.state('view2', {
        url: "/mccsjobs",
        templateUrl: 'components/view2/view2.html',
        controller: 'View2Ctrl'
    });
    $stateProvider.state({
        name: "view2.child1",
        template: 'I am the eldest child'
    });
    $stateProvider.state({
        name: "view2.child2",
        template: 'I am the youngest child'
    });
}])

.controller('View2Ctrl', [function() {

}]);