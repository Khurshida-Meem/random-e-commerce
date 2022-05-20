import { Container, Grid, Box } from '@mui/material';
import React from 'react';
import { visibility } from '../../Element.style';
import './BestSales.css';
import LeftCompo from './Contents/LeftCompo';
import ProductSlider from './Contents/ProductSlider';

const BestSales = () => {
    return (
        <Container>
            <Box sx={{ flexGrow: 1, justifyContent:'center' }}>
                <Grid container >
                    <Grid item xs={4} sx={visibility}>
                        <LeftCompo />
                    </Grid>
                    <Grid item xs={8}>
                        <ProductSlider />
                    </Grid>
                </Grid>
            </Box>


        </Container>
    );
};

export default BestSales;