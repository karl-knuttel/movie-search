import { combineEpics } from 'redux-observable';

import MovieDetailsEpics from './features/MovieDetails/store/MovieDetails.epics';
import PopularMoviesEpics from './features/PopularMovies/store/PopularMovies.epics';
import SearchEpics from './features/Search/store/Search.epics';

const ROOT_EPIC = combineEpics(
    MovieDetailsEpics,
    PopularMoviesEpics,
    SearchEpics
);

export default ROOT_EPIC;
