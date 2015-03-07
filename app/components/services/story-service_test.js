'use strict';

describe('Unit tests: story-service', function () {

    beforeEach(module('ftuApp.story-service'));

    var storyFactory, httpMock;

    beforeEach(inject(function($httpBackend, storyAPIservice) {

        httpMock = $httpBackend;

        //httpMock.when('GET', 'json/stories.json')
        //    .respond([{
        //        "title": "Story Title",
        //        "id": 1
        //    }]);

        httpMock.when('GET', 'json/topics.json')
            .respond([{
                "id": 1,
                "name": "Avira"
            }]);

        storyFactory = storyAPIservice;

    }));

    var storyList, topicList;

    it('should retrieve the stories list', function(){
        storyFactory.getStories().success(function(data){ storyList = data; });
        httpMock.flush();
        expect(storyList[0].title).toBe("Story Title");
    });

    it('should retrieve the topic list', function(){
        storyFactory.getTopics().success(function(data){ topicList = data; });
        httpMock.flush();
        expect(topicList[1].name).toBe("Avira");
    });

});