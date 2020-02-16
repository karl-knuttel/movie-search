import { createSelector } from 'reselect';

export const getMovieDetails = state => state.get('movieDetails');

export const getMovieDetailsEntity = createSelector(
    getMovieDetails,
    movieDetails => movieDetails.entity
);

export const getMovieDetailsError = createSelector(
    getMovieDetails,
    movieDetails => movieDetails.error
);

export const getMovieDetailsFetchStatus = createSelector(
    getMovieDetails,
    movieDetails => movieDetails.fetchStatus
);
