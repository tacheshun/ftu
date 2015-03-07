'use strict';

angular.module('ftuAPP.story-service', [])
    .factory('storyAPIservice', ['$http', function ($http){
        var storyAPI = {};

        storyAPI.getStories = function (){
            return $http.get("json/movies.json");
        };

        return storyAPI;
    }]);