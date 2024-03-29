'use strict';

angular.module("ftuAPP.section", ['ui.bootstrap'])
    .controller('sectionCtrl', ['$scope', 'storyAPIservice', function ($scope, storyAPIservice) {

        $scope.currentPage = 1;
        $scope.pageSize = 3;
        $scope.pageTitle = "News from around the world";

        $scope.getTopic = function () {
            storyAPIservice.getTopic();
        };

        storyAPIservice.getStories().success(function (data) {
            $scope.storyList = data.responseData.results;
        });

        storyAPIservice.getTopics().success(function (data) {
            $scope.topicList = data;
        });
    }]);