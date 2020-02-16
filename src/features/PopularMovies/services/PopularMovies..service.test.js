import nock from 'nock';
import popularMoviesService from './PopularMovies.service';
import { sampleResponse } from './PopularMovies.service.testData';

describe('Popular Movies service', () => {
    it('should be defined', () => {
        expect(popularMoviesService).toBeDefined();
    });

    it('getPopularMovies should be present', () => {
        expect(popularMoviesService.getPopularMovies).toBeDefined();
    });

    describe('getPopularMovies is called', () => {
        it('should search by page number', async () => {
            const page = 1;

            nock(`${popularMoviesService.endpoint}`)
                .persist()
                .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
                .get(
                    `/movie/popular?api_key=${popularMoviesService.key}&language=en-US&page=${page}`
                )
                .reply(200, sampleResponse);

            const results = await popularMoviesService.getPopularMovies({
                page
            });

            expect(results.data).toEqual(sampleResponse);
            expect(results.data.results.length).toBeGreaterThan(0);
        });
    });
});
