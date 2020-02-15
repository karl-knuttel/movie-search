import { combineReducers } from 'redux-immutable';

import coreReducer from './Core/store/Core.reducers';
import searchReducer from './features/Search/store/Search.reducers';

export const rootReducer = combineReducers({
    core: coreReducer,
    search: searchReducer
});

export default rootReducer;
