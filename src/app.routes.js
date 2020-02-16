import Core from './Core';

import NotFoundPage from './pages/404Page';
import HomePage from './pages/HomePage';
import MovieDetailPage from './pages/MovieDetailPage';

const routes = [
    {
        component: HomePage,
        exact: true,
        path: '/'
    },
    {
        component: MovieDetailPage,
        exact: true,
        path: '/movies/:id'
    },
    {
        component: NotFoundPage,
        path: '*'
    }
];

export default [
    {
        component: Core,
        routes
    }
];
