'use strict';

angular.module('ftuAPP.paginate-filter', [])
    .filter('paginate', function () {
        return function (array, currentPage, pageSize) {
            try {
                return array.slice((currentPage - 1) * pageSize, currentPage * pageSize);
            } catch (error) {
                return array;
            }
        };
    });