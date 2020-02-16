import * as Actions from './MovieDetails.actions';
import MOVIE_DETAILS_INITIAL_STATE from './MovieDetails.state';
import { FETCH_STATUS } from '../../../shared/constants';

export default function searchReducer(
    state = MOVIE_DETAILS_INITIAL_STATE,
    action
) {
    switch (action.type) {
        case Actions.MOVIE_DETAILS_FETCH:
            return handleMovieDetailsFetch(state, action.payload);

        case Actions.MOVIE_DETAILS_FETCHED:
            return handleMovieDetailsFetched(state, action.payload);

        case Actions.MOVIE_DETAILS_FETCH_FAILED:
            return handleMovieDetailsFetchFailed(state, action.payload);

        default:
            return state;
    }
}

function handleMovieDetailsFetch(state, payload) {
    return {
        ...state,
        fetchStatus: FETCH_STATUS.FETCHING,
        error: {}
    };
}

function handleMovieDetailsFetched(state, payload) {
    return {
        ...state,
        fetchStatus: FETCH_STATUS.FETCHED,
        error: {},
        entity: payload.data
    };
}

function handleMovieDetailsFetchFailed(state, payload) {
    return {
        ...state,
        fetchStatus: FETCH_STATUS.FETCH_FAILED,
        error: payload
    };
}
