import * as fromActions from './PopularMovies.actions';

describe('PopularMovies actions', () => {
    it('Actions fetch', () => {
        const fetch = fromActions.popularMoviesFetch();
        expect(fetch).toEqual({ type: fromActions.POPULAR_MOVIES_FETCH });
    });

    it('Actions fetched', () => {
        const fetched = fromActions.popularMoviesFetched('data');
        expect(fetched).toEqual({
            type: fromActions.POPULAR_MOVIES_FETCHED,
            payload: 'data'
        });
    });

    it('Actions fetch failed', () => {
        const fetchFailed = fromActions.popularMoviesFetchFailed('error');
        expect(fetchFailed).toEqual({
            type: fromActions.POPULAR_MOVIES_FETCH_FAILED,
            payload: 'error'
        });
    });
});
