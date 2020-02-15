import * as Actions from './Search.actions';
import SEARCH_INITIAL_STATE from './Search.state';
import { FETCH_STATUS } from '../../../shared/constants';

export default function searchReducer(state = SEARCH_INITIAL_STATE, action) {
    switch (action.type) {
        case Actions.SEARCH_FETCH:
            return handleSearchFetch(state, action.payload);

        case Actions.SEARCH_FETCHED:
            return handleSearchFetched(state, action.payload);

        case Actions.SEARCH_FETCH_FAILED:
            return handleSearchFetchFailed(state, action.payload);

        case Actions.SEARCH_FETCH_MORE:
            return handleSearchFetchMore(state, action.payload);

        case Actions.SEARCH_FETCHED_MORE:
            return handleSearchFetchedMore(state, action.payload);

        case Actions.SEARCH_FETCH_MORE_FAILED:
            return handleSearchFetchMoreFailed(state, action.payload);

        case Actions.SEARCH_RESULTS_RESET:
            return handleSearchResultsReset(state);

        case Actions.SEARCH_CURRENT_VALUE_UPDATE:
            return handleSearchCurrentValueUpdate(state, action.payload);

        default:
            return state;
    }
}

function handleSearchFetch(state, payload) {
    return {
        ...state,
        results: {
            ...state.results,
            fetchStatus: FETCH_STATUS.FETCHING,
            error: {}
        }
    };
}

function handleSearchFetched(state, payload) {
    return {
        ...state,
        results: {
            ...state.results,
            fetchStatus: FETCH_STATUS.FETCHED,
            error: {},
            entities: payload.data.results,
            currentPage: payload.data.page,
            pageCount: payload.data.total_pages
        }
    };
}

function handleSearchFetchFailed(state, payload) {
    return {
        ...state,
        results: {
            ...state.results,
            fetchStatus: FETCH_STATUS.FETCH_FAILED,
            error: payload
        }
    };
}

function handleSearchFetchMore(state, payload) {
    return {
        ...state,
        results: {
            ...state.results,
            fetchStatus: FETCH_STATUS.FETCHING,
            error: {}
        }
    };
}

function handleSearchFetchedMore(state, payload) {
    return {
        ...state,
        results: {
            ...state.results,
            fetchStatus: FETCH_STATUS.FETCHED,
            error: {},
            entities: [...state.results.entities, ...payload.data.results],
            currentPage: payload.data.page,
            pageCount: payload.data.total_pages
        }
    };
}

function handleSearchFetchMoreFailed(state, payload) {
    return {
        ...state,
        results: {
            ...state.results,
            fetchStatus: FETCH_STATUS.FETCH_FAILED,
            error: payload
        }
    };
}

function handleSearchResultsReset(state, payload) {
    return {
        ...state,
        results: SEARCH_INITIAL_STATE.results
    };
}

function handleSearchCurrentValueUpdate(state, payload) {
    return {
        ...state,
        currentValue: payload
    };
}
