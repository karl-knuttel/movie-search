import React from 'react';
import { Link } from 'react-router-dom';

import Search from '../features/Search';

const HomePage = () => {
    return (
        <div>
            <Search />
            <div
                style={{
                    width: '100%',
                    textAlign: 'center',
                    padding: '6rem 4rem'
                }}
            >
                <p>
                    Oops, looks like this doesn't exit. Try going back to the
                    homepage
                </p>
                <Link to="/">Go Home</Link>
            </div>
        </div>
    );
};

export default HomePage;
