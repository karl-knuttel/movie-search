import movieDetailsReducer from './MovieDetails.reducers';
import * as Actions from './MovieDetails.actions';
import MOVIE_DETAILS_INITIAL_STATE from './MovieDetails.state';

describe('MovieDetails reducers', () => {
    it('Sets fetchStatus on fetch', () => {
        let state = MOVIE_DETAILS_INITIAL_STATE;
        state = movieDetailsReducer(state, {
            type: Actions.MOVIE_DETAILS_FETCH
        });
        expect(state.fetchStatus).toEqual('fetching');
    });

    it('Sets state on fetch', () => {
        let state = MOVIE_DETAILS_INITIAL_STATE;
        state = movieDetailsReducer(state, {
            type: Actions.MOVIE_DETAILS_FETCHED,
            payload: {
                data: {
                    test: 'test'
                }
            }
        });
        expect(state.fetchStatus).toEqual('fetched');
        expect(state.entity).toEqual({ test: 'test' });
    });

    it('Sets state on fetch failed', () => {
        let state = MOVIE_DETAILS_INITIAL_STATE;
        state = movieDetailsReducer(state, {
            type: Actions.MOVIE_DETAILS_FETCH_FAILED,
            payload: 'error'
        });
        expect(state.fetchStatus).toEqual('fetch-failed');
        expect(state.error).toEqual('error');
    });
});
