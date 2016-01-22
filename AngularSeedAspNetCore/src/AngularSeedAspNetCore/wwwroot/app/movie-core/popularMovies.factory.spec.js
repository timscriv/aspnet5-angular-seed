describe('MovieCore', function () {
    var popularMoviesFactory;
    var $httpBackend;

    beforeEach(module('movieCore'));

    beforeEach(inject(function (_popularMovies_, _$httpBackend_) {
        popularMoviesFactory = _popularMovies_;
        $httpBackend = _$httpBackend_;
    }));


    afterEach(function () {
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should create popular movie', function () {
        var response;
        var expectedData = function (data) {
            //'{"movieId":"tt0796366","description":"Great stuff!"}'
            return angular.fromJson(data).movieId === 'tt0796366';
        };

        $httpBackend.expectPOST('api/movies/popular', expectedData)
            .respond(201);

        popularMoviesFactory.addMovie({
            movieId: 'tt0796366',
            description: "Great stuff!"
        }).then(function(data) {
            response = data;
        }).catch(function() {
            response = 'Error!';
        });

        expect($httpBackend.flush).not.toThrow();

        //response).toEqual('');
    });
    it ('should get popular movie by id', function () {
        $httpBackend.expectGET('api/movies/popular/tt0796366').respond(200);

        popularMoviesFactory.getMovieById('tt0796366');

        expect($httpBackend.flush).not.toThrow();
    });

});