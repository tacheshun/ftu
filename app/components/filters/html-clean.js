'use strict';

angular.module('ftuAPP.html-clean', [])
    .filter('htmlclean', function () {
        return function(text) {
            return String(text).replace(/<[^>]+>/gm, '');
        };
    });