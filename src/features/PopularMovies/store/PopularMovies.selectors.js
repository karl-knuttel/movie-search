import { createSelector } from 'reselect';

export const getPopularMovies = state => state.get('popularMovies');

export const getPopularMoviesEntities = createSelector(
    getPopularMovies,
    popularMovies => popularMovies.entities
);

export const getPopularMoviesError = createSelector(
    getPopularMovies,
    popularMovies => popularMovies.error
);

export const getPopularMoviesFetchStatus = createSelector(
    getPopularMovies,
    popularMovies => popularMovies.fetchStatus
);

export const getPopularMoviesCurrentPage = createSelector(
    getPopularMovies,
    popularMovies => popularMovies.currentPage
);

export const getPopularMoviesPageCount = createSelector(
    getPopularMovies,
    popularMovies => popularMovies.pageCount
);
