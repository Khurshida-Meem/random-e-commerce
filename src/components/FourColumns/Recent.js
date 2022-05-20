import { Box, Typography } from '@mui/material';
import React from 'react';
import useData from '../../hooks/useData';
import ProductCard from './ProductCard';
import { HrDark, HrLight, titleStyle } from './ProductCard.style';

const Recent = () => {

    const allProducts = useData('https://raw.githubusercontent.com/Khurshida-Meem/fake-Datas/main/e-commerce/products')

    const products = allProducts.slice(0,3)


    return (
        <Box>
            <Typography sx={titleStyle} variant="h5" gutterBottom component="div">
                Recently Added
            </Typography>
            <HrLight>
                <HrDark></HrDark>
            </HrLight>
            <Box>
                {
                    products.map(product => (
                        <ProductCard key={product.key} product={product} />
                    ))
                }
                
            </Box>
        </Box>
    );
};

export default Recent;

