import { createSelector } from 'reselect';

export const getSearch = state => state.get('search');

/*  Results */
export const getSearchResults = createSelector(
    getSearch,
    search => search.results
);

export const getSearchResultsEntities = createSelector(
    getSearchResults,
    results => results.entities
);

export const getSearchResultsError = createSelector(
    getSearchResults,
    results => results.error
);

export const getSearchResultsFetchStatus = createSelector(
    getSearchResults,
    results => results.fetchStatus
);

export const getSearchResultsCurrentPage = createSelector(
    getSearchResults,
    results => results.currentPage
);

export const getSearchResultsPageCount = createSelector(
    getSearchResults,
    results => results.pageCount
);

/* Search current value */
export const getSearchCurrentValue = createSelector(
    getSearch,
    search => search.currentValue
);
