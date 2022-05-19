import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import BannerSlider from '../BannerSlider/BannerSlider';
import { BsArrowRightShort } from "react-icons/bs";
import './Banner.css'
import { ButtonSecondary, Flex } from '../../../Element.styled';

const Banner = () => {
    return (
        <div style={{ marginTop: '50px' }} className='banner-bg'>
            <Container>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} lg={8}>
                            <Box>
                                <BannerSlider />
                            </Box>

                        </Grid>
                        <Grid sx={{ display: { xs: 'none', md: 'block' } }} item lg={4}>
                            <div style={{ padding: '30px' }} className='bg-right'>
                                <div className='banner-button-container'>
                                    <h1 style={{color: 'var(--color-text)', margin: '30px auto 20px auto'}}>Delivered to <span style={{color: 'var(--color-primary)'}}>your home</span></h1>
                                    <ButtonSecondary padding='6px 14px' radius='3px'>
                                        <Flex>
                                            <span>Shop Now </span><BsArrowRightShort className='arrow' />
                                        </Flex>
                                    </ButtonSecondary>
                                </div>

                            </div>
                        </Grid>

                    </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default Banner;