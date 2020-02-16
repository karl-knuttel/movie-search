import { combineReducers } from 'redux-immutable';

import coreReducer from './Core/store/Core.reducers';
import popularMoviesReducer from './features/PopularMovies/store/PopularMovies.reducers';
import searchReducer from './features/Search/store/Search.reducers';

export const rootReducer = combineReducers({
    core: coreReducer,
    popularMovies: popularMoviesReducer,
    search: searchReducer
});

export default rootReducer;
