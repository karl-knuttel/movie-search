import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';

import core from './Core/store/Core.reducers';
import movieDetails from './features/MovieDetails/store/MovieDetails.reducers';
import popularMovies from './features/PopularMovies/store/PopularMovies.reducers';
import search from './features/Search/store/Search.reducers';

export const rootReducer = history =>
    combineReducers({
        core,
        movieDetails,
        popularMovies,
        router: connectRouter(history),
        search
    });

export default rootReducer;
