'use strict';

angular.module("ftuAPP.section", ['ui.bootstrap'])
    .controller('sectionCtrl', ['$scope', 'storyAPIservice', function ($scope, storyAPIservice) {

        $scope.currentPage = 1;
        $scope.pageSize = 12;
        $scope.pageTitle = "News from around the world";

        storyAPIservice.getStories().success(function (data) {
            $scope.storyList = data;
        });

        storyAPIservice.getTopics().success(function (data) {
            $scope.topicList = data;
        });
    }]);