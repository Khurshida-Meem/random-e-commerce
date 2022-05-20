import { Container, Grid, Box, Typography } from '@mui/material';
import React from 'react';
import { visibility } from '../../Element.style';
import './BestSales.css';
import LeftCompo from './Contents/LeftCompo';
import ProductSlider from './Contents/ProductSlider';

const BestSales = () => {
    return (
        <Container sx={{mt: '100px'}}>
            <Typography sx={{ color: 'var(--color-text)', fontWeight: '700', mb: '30px' }} variant="h4" gutterBottom component="div">
                    Daily Best Sells
                </Typography>
            <Box sx={{ flexGrow: 1, justifyContent:'center' }}>
                <Grid container >
                    <Grid item md={4} sx={visibility}>
                        <LeftCompo />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <ProductSlider />
                    </Grid>
                </Grid>
            </Box>


        </Container>
    );
};

export default BestSales;