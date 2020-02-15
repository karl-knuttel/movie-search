import React from 'react';

const Layout = props => {
    const { children } = props;

    return (
        <>
            <header className="layout-header">
                {/* <p>This is the header that appears on every view</p> */}
            </header>
            <main className="layout-main">
                {/* <p>This is the dynamic main content where we can put routes</p> */}
                {children}
            </main>
            <footer className="layout-footer">
                {/* This is the footer that appears on every view */}
            </footer>
        </>
    );
};

export default Layout;
