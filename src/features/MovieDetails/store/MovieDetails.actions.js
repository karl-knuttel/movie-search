export const MOVIE_DETAILS_FETCH = '@@movie-search/movie-details/fetch';
export const MOVIE_DETAILS_FETCHED = '@@movie-search/movie-details/fetched';
export const MOVIE_DETAILS_FETCH_FAILED =
    '@@movie-search/movie-details/fetch-failed';

export const movieDetailsFetch = payload => {
    return {
        type: MOVIE_DETAILS_FETCH,
        payload
    };
};

export const movieDetailsFetched = payload => {
    return {
        type: MOVIE_DETAILS_FETCHED,
        payload
    };
};

export const movieDetailsFetchFailed = payload => {
    return {
        type: MOVIE_DETAILS_FETCH_FAILED,
        payload
    };
};
