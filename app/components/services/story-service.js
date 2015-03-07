'use strict';

angular.module('ftuAPP.story-service', [])
    .factory('storyAPIservice', ['$http', function ($http){
        var storyAPI = {};

        storyAPI.getStories = function (){
            return $http.get("json/movies.json");
            //return {
            //    parseFeed : function(url){
            //        return $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
            //    }
            //};
        };

        storyAPI.getTopics = function () {
            return $http.get("json/genres.json");
        };

        return storyAPI;
    }]);