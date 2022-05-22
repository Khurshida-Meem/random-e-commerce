import React from 'react';
import BottomNav from './BottomNav';
import TopNav from './TopNav';

const Navbar = (props) => {
    return (
        <>
            <TopNav />
            <hr />
            <BottomNav />
        </>
    );
};

export default Navbar;