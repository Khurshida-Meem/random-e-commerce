import { Box, Container, Typography } from '@mui/material';
import React from 'react';
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
    return (
        <Container sx={{mt: '100px'}}>
            <Box sx={flexible}>
                <Typography sx={{color: 'var(--color-text)', fontWeight: '700'}} variant="h4" gutterBottom component="div">
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
        </Container>
    );
};

export default Products;