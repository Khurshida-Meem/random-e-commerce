import { Box, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import useData from '../../hooks/useData'
import Product from './Product';
import { CategoryButton } from './Products.style';

const buttons = ['All', 'Meats', 'Vegetables', 'Snack']

const flexible = {
    display: {
        md: 'flex'
    },
    justifyContent: 'space-between',
    alignItems: 'center'
}

const Products = () => {

    const [products, setProducts] = useState([]);

    const allProducts = useData('https://raw.githubusercontent.com/Khurshida-Meem/fake-Datas/main/e-commerce/products');

    // console.log(allProducts);

    return (
        <Container sx={{ mt: '100px' }}>
            <Box sx={flexible}>
                <Typography sx={{ color: 'var(--color-text)', fontWeight: '700' }} variant="h4" gutterBottom component="div">
                    Popular Products
                </Typography>
                <Box>
                    {
                        buttons.map(button => (
                            <CategoryButton key={button}>{button}</CategoryButton>
                        ))
                    }
                </Box>
            </Box>
            <Box>

                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        {
                            allProducts.map(product => (
                                <Grid item xs={12} md={4}>
                                    <Product key={product.key} product={product} />
                                </Grid>
                            ))
                        }
                    </Grid>
                </Box>



            </Box>
        </Container>
    );
};

export default Products;