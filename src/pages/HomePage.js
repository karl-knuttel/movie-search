import React from 'react';

import PopularMovies from '../features/PopularMovies';
import Search from '../features/Search';

const HomePage = () => {
    return (
        <div>
            <Search />
            <PopularMovies />
        </div>
    );
};

export default HomePage;
