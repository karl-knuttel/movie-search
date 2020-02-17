import popularMoviesReducer from './PopularMovies.reducers';
import * as Actions from './PopularMovies.actions';
import POPULAR_MOVIES_INITIAL_STATE from './PopularMovies.state';

describe('PopularMovies reducers', () => {
    it('Sets fetchStatus on fetch', () => {
        let state = POPULAR_MOVIES_INITIAL_STATE;
        state = popularMoviesReducer(state, {
            type: Actions.POPULAR_MOVIES_FETCH
        });
        expect(state.fetchStatus).toEqual('fetching');
    });

    it('Sets state on fetch', () => {
        let state = POPULAR_MOVIES_INITIAL_STATE;
        state = popularMoviesReducer(state, {
            type: Actions.POPULAR_MOVIES_FETCHED,
            payload: {
                data: {
                    results: 'entities',
                    page: 1,
                    total_pages: 10
                }
            }
        });
        expect(state.fetchStatus).toEqual('fetched');
        expect(state.entities).toEqual('entities');
        expect(state.currentPage).toEqual(1);
        expect(state.pageCount).toEqual(10);
    });

    it('Sets state on fetch failed', () => {
        let state = POPULAR_MOVIES_INITIAL_STATE;
        state = popularMoviesReducer(state, {
            type: Actions.POPULAR_MOVIES_FETCH_FAILED,
            payload: 'error'
        });
        expect(state.fetchStatus).toEqual('fetch-failed');
        expect(state.error).toEqual('error');
    });
});
