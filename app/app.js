'use strict';

angular.module("ftuAPP", [
    'ngRoute',
    'ftuAPP.section',
    'ftuAPP.story',
    'ftuAPP.paginate-filter',
    'ftuAPP.story-service'
])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
            when("/", {templateUrl: "section/section.html", controller: "sectionCtrl"}).
            when("/story/:id", {templateUrl: "story/story.html", controller: "storyCtrl"}).
            otherwise({redirectTo: "/"});
    }]);