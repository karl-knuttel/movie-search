import { createStore, applyMiddleware } from 'redux';
import Immutable from 'immutable';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';

import rootReducer from './rootReducer';
import rootEpic from './rootEpic';

const epicMiddleware = createEpicMiddleware();

export const INITIAL_STATE = Immutable.Map();

const store = createStore(
    rootReducer,
    INITIAL_STATE,
    composeWithDevTools(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(rootEpic);

export default store;
