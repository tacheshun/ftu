'use strict';

angular.module('ftuAPP.story-service', [])
    .factory('storyAPIservice', ['$http', '$routeParams', function ($http, $routeParams){
        var storyAPI = {};

        storyAPI.getStart = function () {
            return encodeURIComponent("1");
        };

        storyAPI.getRsz = function () {
            //API max rsz is 6
            return encodeURIComponent("6");
        };

        storyAPI.getTopic = function () {
            return (encodeURIComponent($routeParams.topicName) === "undefined") ? "Avira" : encodeURIComponent($routeParams.topicName);
        };

        storyAPI.getStories = function () {
            return $http.jsonp('https://ajax.googleapis.com/ajax/services/search/news?v=1.0&q=' + storyAPI.getTopic() + '&rsz=' + storyAPI.getRsz() + '&start=' + storyAPI.getStart() + '&callback=JSON_CALLBACK', {
            });
        };

        storyAPI.getTopics = function () {
            return $http.get("json/topics.json");
        };

        return storyAPI;
    }]);