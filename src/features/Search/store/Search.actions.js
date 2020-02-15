export const SEARCH_FETCH = '@@movie-search/search/fetch';
export const SEARCH_FETCHED = '@@movie-search/search/fetched';
export const SEARCH_FETCH_FAILED = '@@movie-search/search/fetch-failed';
export const SEARCH_FETCH_MORE = '@@movie-search/search/fetch-more';
export const SEARCH_FETCHED_MORE = '@@movie-search/search/fetched-more';
export const SEARCH_FETCH_MORE_FAILED =
    '@@movie-search/search/fetch-more-failed';
export const SEARCH_RESULTS_RESET = '@@movie-search/search/reset';
export const SEARCH_CURRENT_VALUE_UPDATE =
    '@@movie-search/current-value/update';

export const searchFetch = payload => {
    return {
        type: SEARCH_FETCH,
        payload
    };
};

export const searchFetched = payload => {
    return {
        type: SEARCH_FETCHED,
        payload
    };
};

export const searchFetchFailed = payload => {
    return {
        type: SEARCH_FETCH_FAILED,
        payload
    };
};

export const searchFetchMore = payload => {
    return {
        type: SEARCH_FETCH_MORE,
        payload
    };
};

export const searchFetchedMore = payload => {
    return {
        type: SEARCH_FETCHED_MORE,
        payload
    };
};

export const searchFetchMoreFailed = payload => {
    return {
        type: SEARCH_FETCH_MORE_FAILED,
        payload
    };
};

export const searchResultsReset = () => {
    return {
        type: SEARCH_RESULTS_RESET
    };
};

export const searchCurrentValueUpdate = payload => {
    return {
        type: SEARCH_CURRENT_VALUE_UPDATE,
        payload
    };
};
