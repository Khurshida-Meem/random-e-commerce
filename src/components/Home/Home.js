import React from 'react';
import Banner from '../Banner/Banner/Banner';
import BestSales from '../BestSales/BestSales';
import Featured from '../Featured/Featured';
import ColumnContainer from '../FourColumns/ColumnContainer';
import Navbar from '../Navbar/Navbar';
import Products from '../Products/Products';

const Home = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <Featured />
            <Products />
            <BestSales />
            <ColumnContainer />
        </>
    );
};

export default Home;