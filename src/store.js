import { createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';
import Immutable from 'immutable';

import rootReducer from './rootReducer';
import rootEpic from './rootEpic';

const history = createBrowserHistory();

const epicMiddleware = createEpicMiddleware();

export const INITIAL_STATE = Immutable.Map();

const store = createStore(
    rootReducer(history),
    INITIAL_STATE,
    composeWithDevTools(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(rootEpic);

export default store;

export { history };
