import { renderRoutes } from 'react-router-config';
import React from 'react';
import PropTypes from 'prop-types';

import Layout from './components/Layout';

const Core = props => {
    const { route } = props;

    return (
        <div>
            <Layout>{renderRoutes(route.routes)}</Layout>
        </div>
    );
};

Core.propTypes = {
    route: PropTypes.object
};

export default Core;
