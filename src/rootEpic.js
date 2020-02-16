import { combineEpics } from 'redux-observable';

import PopularMoviesEpics from './features/PopularMovies/store/PopularMovies.epics';
import SearchEpics from './features/Search/store/Search.epics';

const ROOT_EPIC = combineEpics(PopularMoviesEpics, SearchEpics);

export default ROOT_EPIC;
