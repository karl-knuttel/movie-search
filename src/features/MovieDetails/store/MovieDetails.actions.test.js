import * as fromActions from './MovieDetails.actions';

describe('MovieDetails actions', () => {
    it('Actions fetch', () => {
        const fetch = fromActions.movieDetailsFetch();
        expect(fetch).toEqual({ type: fromActions.MOVIE_DETAILS_FETCH });
    });

    it('Actions fetched', () => {
        const fetched = fromActions.movieDetailsFetched('data');
        expect(fetched).toEqual({
            type: fromActions.MOVIE_DETAILS_FETCHED,
            payload: 'data'
        });
    });

    it('Actions fetch failed', () => {
        const fetchFailed = fromActions.movieDetailsFetchFailed('error');
        expect(fetchFailed).toEqual({
            type: fromActions.MOVIE_DETAILS_FETCH_FAILED,
            payload: 'error'
        });
    });
});
