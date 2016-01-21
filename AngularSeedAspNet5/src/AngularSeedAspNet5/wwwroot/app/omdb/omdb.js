(function () {
    'use strict';
    var movieData = [{ "Title": "Star Trek", "Year": "2009", "imdbID": "tt0796366", "Type": "movie", "Poster": "http://ia.media-imdb.com/images/M/MV5BMjE5NDQ5OTE4Ml5BMl5BanBnXkFtZTcwOTE3NDIzMw@@._V1_SX300.jpg" }, { "Title": "Star Trek Into Darkness", "Year": "2013", "imdbID": "tt1408101", "Type": "movie", "Poster": "http://ia.media-imdb.com/images/M/MV5BMTk2NzczOTgxNF5BMl5BanBnXkFtZTcwODQ5ODczOQ@@._V1_SX300.jpg" }, { "Title": "Star Trek: First Contact", "Year": "1996", "imdbID": "tt0117731", "Type": "movie", "Poster": "http://ia.media-imdb.com/images/M/MV5BMTg4OTYwODY4MF5BMl5BanBnXkFtZTgwNTg2NjIyMDE@._V1_SX300.jpg" }, { "Title": "Star Trek II: The Wrath of Khan", "Year": "1982", "imdbID": "tt0084726", "Type": "movie", "Poster": "http://ia.media-imdb.com/images/M/MV5BMTcwNjc5NjA4N15BMl5BanBnXkFtZTcwNDk5MzI4OA@@._V1_SX300.jpg" }, { "Title": "Star Trek: The Motion Picture", "Year": "1979", "imdbID": "tt0079945", "Type": "movie", "Poster": "http://ia.media-imdb.com/images/M/MV5BNzE4MTY1MTMyN15BMl5BanBnXkFtZTcwMzk5MzI4OA@@._V1_SX300.jpg" }, { "Title": "Star Trek: The Next Generation", "Year": "1987–1994", "imdbID": "tt0092455", "Type": "series", "Poster": "http://ia.media-imdb.com/images/M/MV5BMTgyMjY5NTg2NV5BMl5BanBnXkFtZTgwMTAzMDczMDE@._V1_SX300.jpg" }, { "Title": "Star Trek IV: The Voyage Home", "Year": "1986", "imdbID": "tt0092007", "Type": "movie", "Poster": "http://ia.media-imdb.com/images/M/MV5BMjEzOTk1ODU1Ml5BMl5BanBnXkFtZTcwODEwNDI4OA@@._V1_SX300.jpg" }, { "Title": "Star Trek: Generations", "Year": "1994", "imdbID": "tt0111280", "Type": "movie", "Poster": "http://ia.media-imdb.com/images/M/MV5BOTMyODkyODk1MV5BMl5BanBnXkFtZTcwNjk5MzI4OA@@._V1_SX300.jpg" }, { "Title": "Star Trek III: The Search for Spock", "Year": "1984", "imdbID": "tt0088170", "Type": "movie", "Poster": "http://ia.media-imdb.com/images/M/MV5BMTc5NDY1OTU0Ml5BMl5BanBnXkFtZTcwNDIwNDI4OA@@._V1_SX300.jpg" }, { "Title": "Star Trek: Nemesis", "Year": "2002", "imdbID": "tt0253754", "Type": "movie", "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxNjY2NDY3NF5BMl5BanBnXkFtZTcwMjA0MTEzMw@@._V1_SX300.jpg" }];
    var movieDataById = { "Title": "Star Trek", "Year": "2009", "Rated": "PG-13", "Released": "08 May 2009", "Runtime": "127 min", "Genre": "Action, Adventure, Sci-Fi", "Director": "J.J. Abrams", "Writer": "Roberto Orci, Alex Kurtzman, Gene Roddenberry (television series \"Star Trek\")", "Actors": "Chris Pine, Zachary Quinto, Leonard Nimoy, Eric Bana", "Plot": "The brash James T. Kirk tries to live up to his father's legacy with Mr. Spock keeping him in check as a vengeful, time-traveling Romulan creates black holes to destroy the Federation one planet at a time.", "Language": "English", "Country": "USA, Germany", "Awards": "Won 1 Oscar. Another 22 wins & 77 nominations.", "Poster": "http://ia.media-imdb.com/images/M/MV5BMjE5NDQ5OTE4Ml5BMl5BanBnXkFtZTcwOTE3NDIzMw@@._V1_SX300.jpg", "Metascore": "82", "imdbRating": "8.0", "imdbVotes": "483,229", "imdbID": "tt0796366", "Type": "movie", "Response": "True" };

    angular.module('omdb', [])
        .factory('omdbApi', function() {
            var api = {
                search: function(query) {
                    return movieData;
                },
                findById: function(id) {
                    return movieDataById;
                }
            };


            return api;
        });
})();

