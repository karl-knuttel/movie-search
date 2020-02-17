import React from 'react';

import MovieDetails from '../features/MovieDetails';
import Search from '../features/Search';

const HomePage = () => {
    return (
        <div>
            <Search />
            <MovieDetails />
        </div>
    );
};

export default HomePage;
