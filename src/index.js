import { ConnectedRouter as Router } from 'connected-react-router/immutable';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import React from 'react';
import ReactDOM from 'react-dom';
import routes from './app.routes';

import store, { history } from './store';
import './index.scss';

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>{renderRoutes(routes)}</Router>
    </Provider>,
    document.getElementById('root')
);
