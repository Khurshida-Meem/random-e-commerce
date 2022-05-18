import { Box } from '@mui/material';
import React from 'react';
import "slick-carousel/slick/slick.css";
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import './BannerSlider.css'
import { BannerH1, Bannerp } from './BannerSlider.style';


const BannerSlider = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <Box sx={{ p: '30px' }}>
            <Slider {...settings}>
                <div className='banner-slider slider-1'>
                    <BannerH1>Snacks Box <br /> Daily Save</BannerH1>
                    <Bannerp>Signup for the daily newsletter</Bannerp>
                </div>
                <div className='banner-slider slider-2'>
                    <BannerH1>Pure Coffee <br /> Big Discount</BannerH1>
                    <Bannerp>Save upto 50% on your first order</Bannerp>
                </div>

            </Slider>
        </Box>
    );
};

export default BannerSlider;