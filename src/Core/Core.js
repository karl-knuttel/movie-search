import React from 'react';
// import PropTypes from 'prop-types';

import Layout from './components/Layout';
import Search from '../features/Search';

const Core = () => {
    return (
        <div>
            <Layout>
                <Search />
            </Layout>
        </div>
    );
};

Core.propTypes = {};

export default Core;
