import React from 'react';
import { Link } from 'react-router-dom';

const Layout = props => {
    const { children } = props;

    return (
        <>
            <header className="layout-header">
                <div className="header__container">
                    <Link className="header__title-link" to="/">
                        <h1 className="header__title">Movie DB</h1>
                    </Link>
                </div>
            </header>
            <main className="layout-main">
                {/* <p>This is the dynamic main content where we render our routes</p> */}
                {children}
            </main>
            <footer className="layout-footer">
                {/* This is the footer that appears on every view */}
            </footer>
        </>
    );
};

export default Layout;
