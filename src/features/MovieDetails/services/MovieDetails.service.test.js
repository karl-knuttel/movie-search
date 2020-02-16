import nock from 'nock';
import movieDetailsService from './MovieDetails.service';
import { sampleResponse } from './MovieDetails.service.testData';

describe('Popular Movies service', () => {
    it('should be defined', () => {
        expect(movieDetailsService).toBeDefined();
    });

    it('getMovieDetails should be present', () => {
        expect(movieDetailsService.getMovieDetails).toBeDefined();
    });

    describe('getMovieDetails is called', () => {
        it('should search by movie id', async () => {
            const id = 1234;

            nock(`${movieDetailsService.endpoint}`)
                .persist()
                .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
                .get(
                    `/movie/${id}?api_key=${movieDetailsService.key}&language=en-US`
                )
                .reply(200, sampleResponse);

            const result = await movieDetailsService.getMovieDetails({
                id
            });

            expect(Object.keys(result.data).length).toBeGreaterThan(0);
            expect(result.data).toEqual(sampleResponse);
        });
    });
});
