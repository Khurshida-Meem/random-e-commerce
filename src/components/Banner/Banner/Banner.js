import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import BannerSlider from '../BannerSlider/BannerSlider';
import './Banner.css'

const Banner = () => {
    return (
        <div style={{marginTop: '50px'}} className='banner-bg'>
            <Container>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} lg={8}>
                            <Box>
                                <BannerSlider />
                            </Box>

                        </Grid>
                        <Grid sx={{ display: { xs: 'none', md: 'block' } }} item lg={4}>
                            asdf
                        </Grid>

                    </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default Banner;