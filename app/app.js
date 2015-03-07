'use strict';

angular.module("ftuAPP", [
    'ngRoute',
    'ftuAPP.section',
    'ftuAPP.story',
    'ftuAPP.topic',
    'ftuAPP.paginate-filter',
    'ftuAPP.html-clean',
    'ftuAPP.story-service'
])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
            when("/", {templateUrl: "section/section.html", controller: "sectionCtrl"}).
            when("/story/:id", {templateUrl: "story/story.html", controller: "storyCtrl"}).
            when("/topic/:topicName", {templateUrl: "section/section.html", controller: "topicCtrl"}).
            otherwise({redirectTo: "/"});
    }]);