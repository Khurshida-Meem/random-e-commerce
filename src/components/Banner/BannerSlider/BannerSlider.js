import { Box } from '@mui/material';
import React from 'react';
import "slick-carousel/slick/slick.css";
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import './BannerSlider.css'
import SlideContent from './SlideContent';


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
                <div className='img-bg slider-1'>
                    <SlideContent
                        heading={'Snacks Box Daily Save'}
                        paragraph={'Signup for the daily newsletter'}
                    />
                </div>
                <div className='img-bg slider-2'>
                <SlideContent
                        heading={'Pure Coffee Big Discount'}
                        paragraph={'Save upto 50% on your first order'}
                    />
                    
                </div>

            </Slider>
        </Box>
    );
};

export default BannerSlider;