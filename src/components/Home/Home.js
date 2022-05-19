import React from 'react';
import Banner from '../Banner/Banner/Banner';
import Featured from '../Featured/Featured';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <Featured />
        </>
    );
};

export default Home;