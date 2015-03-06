'use strict';

angular.module("ftuAPP.section", ['ui.bootstrap'])
    .controller('sectionCtrl', ['$scope', '$http', function ($scope, $http) {

        $scope.currentPage = 1;
        $scope.pageSize = 12;

        $http.get('json/movies.json').success(function (data) {
            $scope.storyList = data;
        });
    }]);