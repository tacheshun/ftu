'use strict';
angular.module("ftuAPP.topic",['ui.bootstrap'])
    .controller('topicCtrl', ['$scope', 'storyAPIservice', '$routeParams', '$filter', function ($scope, storyAPIservice, $routeParams, $filter) {

        $scope.currentPage = 1;
        $scope.pageSize = 12;
        $scope.topicName = $routeParams.topicName;
        $scope.pageTitle = $scope.topicName + " topics";

        storyAPIservice.getStories().success(function (data) {
            $scope.storyList = $filter('filter')(data, function (story) {
                return $filter('filter')(story.genres, {name: $scope.topicName}).length;
            });
        });

        storyAPIservice.getTopics().success(function (data) {
            $scope.topicList = data;
        });

    }])