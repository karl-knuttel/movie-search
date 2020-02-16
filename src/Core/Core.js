import React from 'react';
// import PropTypes from 'prop-types';

import Layout from './components/Layout';
import Search from '../features/Search';
import PopularMovies from '../features/PopularMovies';

const Core = () => {
    return (
        <div>
            <Layout>
                <Search />
                <PopularMovies />
            </Layout>
        </div>
    );
};

Core.propTypes = {};

export default Core;
