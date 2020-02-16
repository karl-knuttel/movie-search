import * as Actions from './PopularMovies.actions';
import POPULAR_MOVIES_INITIAL_STATE from './PopularMovies.state';
import { FETCH_STATUS } from '../../../shared/constants';

export default function searchReducer(
    state = POPULAR_MOVIES_INITIAL_STATE,
    action
) {
    switch (action.type) {
        case Actions.POPULAR_MOVIES_FETCH:
            return handlePopularMoviesFetch(state, action.payload);

        case Actions.POPULAR_MOVIES_FETCHED:
            return handlePopularMoviesFetched(state, action.payload);

        case Actions.POPULAR_MOVIES_FETCH_FAILED:
            return handlePopularMoviesFetchFailed(state, action.payload);

        default:
            return state;
    }
}

function handlePopularMoviesFetch(state, payload) {
    return {
        ...state,
        fetchStatus: FETCH_STATUS.FETCHING,
        error: {}
    };
}

function handlePopularMoviesFetched(state, payload) {
    return {
        ...state,
        fetchStatus: FETCH_STATUS.FETCHED,
        error: {},
        entities: payload.data.results,
        currentPage: payload.data.page,
        pageCount: payload.data.total_pages
    };
}

function handlePopularMoviesFetchFailed(state, payload) {
    return {
        ...state,
        ...state.results,
        fetchStatus: FETCH_STATUS.FETCH_FAILED,
        error: payload
    };
}
