import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';

import coreReducer from './Core/store/Core.reducers';
import movieDetailsReducer from './features/MovieDetails/store/MovieDetails.reducers';
import popularMoviesReducer from './features/PopularMovies/store/PopularMovies.reducers';
import searchReducer from './features/Search/store/Search.reducers';

export const rootReducer = history =>
    combineReducers({
        core: coreReducer,
        movieDetails: movieDetailsReducer,
        popularMovies: popularMoviesReducer,
        router: connectRouter(history),
        search: searchReducer
    });

export default rootReducer;
