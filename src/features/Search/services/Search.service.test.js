import nock from 'nock';
import searchService from './Search.service';
import { sampleResponse } from './Search.service.testData';

describe('Search service', () => {
    it('should be defined', () => {
        expect(searchService).toBeDefined();
    });

    it('getAutosuggest should be present', () => {
        expect(searchService.getAutosuggest).toBeDefined();
    });

    describe('getAutosuggest is called', () => {
        it('should search by query and page number', async () => {
            const page = 1;
            const query = 'matrix';

            nock(`${searchService.endpoint}`)
                .persist()
                .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
                .get(
                    `/search/movie?api_key=${searchService.key}&language=en-US&page=${page}&query=${query}&include_adult=false`
                )
                .reply(200, sampleResponse);

            const results = await searchService.getAutosuggest({
                query,
                page
            });

            expect(results.data).toEqual(sampleResponse);
            expect(results.data.results.length).toBeGreaterThan(0);
        });
    });
});
