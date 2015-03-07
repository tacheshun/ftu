'use strict';

angular.module("ftuAPP.story", ['ui.bootstrap'])
    .controller('storyCtrl', ['$scope', '$filter', 'storyAPIservice', '$routeParams', function ($scope, $filter, storyAPIservice, $routeParams) {

        $scope.storyId = $routeParams.id;

        storyAPIservice.getStories().success(function (data) {
            $scope.story = $filter('filter')(data, {id: parseInt($scope.storyId)}, true)[0];
        });
    }]);