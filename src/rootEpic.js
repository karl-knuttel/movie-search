import { combineEpics } from 'redux-observable';

import SearchEpics from './features/Search/store/Search.epics';

const ROOT_EPIC = combineEpics(SearchEpics);

export default ROOT_EPIC;
