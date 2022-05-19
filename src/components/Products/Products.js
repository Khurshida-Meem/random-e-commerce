import { Box, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
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


    useEffect((() => {
        setProducts(allProducts.slice(0, 6));
    }), [allProducts])

    const handleCategoryClick = category => {
        const productcategorized = allProducts.filter(product => product.category === category);
        category==='All'? setProducts(allProducts.slice(0, 6)) : setProducts(productcategorized);
        
    }


    return (
        <Container sx={{ mt: '100px' }}>
            <Box sx={flexible}>
                <Typography sx={{ color: 'var(--color-text)', fontWeight: '700' }} variant="h4" gutterBottom component="div">
                    Popular Products
                </Typography>
                <Box>
                    {
                        buttons.map(button => (
                            <CategoryButton onClick={() => handleCategoryClick(button)} key={button}>{button}</CategoryButton>
                        ))
                    }
                </Box>
            </Box>
            <Box>

                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        {
                            products.map(product => (
                                <Grid key={product.key} item xs={12} md={4}>
                                    <Product product={product} />
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