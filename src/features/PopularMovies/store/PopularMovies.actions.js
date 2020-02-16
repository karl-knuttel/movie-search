export const POPULAR_MOVIES_FETCH = '@@movie-search/popular-movies/fetch';
export const POPULAR_MOVIES_FETCHED = '@@movie-search/popular-movies/fetched';
export const POPULAR_MOVIES_FETCH_FAILED =
    '@@movie-search/popular-movies/fetch-failed';

export const popularMoviesFetch = payload => {
    return {
        type: POPULAR_MOVIES_FETCH,
        payload
    };
};

export const popularMoviesFetched = payload => {
    return {
        type: POPULAR_MOVIES_FETCHED,
        payload
    };
};

export const popularMoviesFetchFailed = payload => {
    return {
        type: POPULAR_MOVIES_FETCH_FAILED,
        payload
    };
};
