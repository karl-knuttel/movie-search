import React from 'react';
import PropTypes from 'prop-types';

import MovieDetails from '../features/MovieDetails';
import Search from '../features/Search';

const HomePage = props => {
    return (
        <div>
            <Search />
            <MovieDetails />
        </div>
    );
};

HomePage.propTypes = {};

export default HomePage;
