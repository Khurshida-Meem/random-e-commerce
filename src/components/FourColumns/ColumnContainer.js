import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import Recent from './Recent';
import TopRated from './TopRated';
import TopSelling from './TopSelling';
import Trending from './Trending';

const ColumnContainer = () => {


    return (
        <Container sx={{mt: '100px'}} >
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }}>
                    <Grid item xs={12} sm={12} md={3}>
                        <TopSelling />
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                        <Trending />
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                        <Recent />
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                        <TopRated />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default ColumnContainer;