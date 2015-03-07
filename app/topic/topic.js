'use strict';
angular.module("ftuAPP.topic",['ui.bootstrap'])
    .controller('topicCtrl', ['$scope', 'storyAPIservice', '$routeParams', '$filter', function ($scope, storyAPIservice, $routeParams, $filter) {

        $scope.currentPage = 1;
        $scope.pageSize = 3;
        $scope.topicName = $routeParams.topicName;
        $scope.pageTitle = $scope.topicName + " topics";

        storyAPIservice.getStories().success(function (data) {
            $scope.storyList = data.responseData.results;
        });

        storyAPIservice.getTopics().success(function (data) {
            $scope.topicList = data;
        });

    }])