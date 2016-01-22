(function () {
    'use strict';

    angular
        .module('movieCore',[])
        .factory('popularMovies', popularMovies);

    popularMovies.$inject = ['$http','$q'];

    function popularMovies($http,$q) {
        var service = {
            addMovie: addMovie,
            getMovieById: getMovieById
        };
        return service;

        function getMovieById(id) {
            return $http.get('api/movies/popular/' + id)
                .then(function(result) {
                    return result.data;
                });
        }

        function addMovie(dto) {
            return $http.post('api/movies/popular', dto)
                .then(function (result) {
                    return result.data;
                });
        }

    }
})();