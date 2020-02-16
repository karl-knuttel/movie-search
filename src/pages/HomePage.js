import React from 'react';
import PropTypes from 'prop-types';

import PopularMovies from '../features/PopularMovies';
import Search from '../features/Search';

const HomePage = props => {
    return (
        <div>
            <Search />
            <PopularMovies />
        </div>
    );
};

HomePage.propTypes = {};

export default HomePage;
