import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import useData from '../../../hooks/useData';
import ProductSlideCard from './ProductSlideCard';

const ProductSlider = () => {

    const [products, setProducts] = useState([]);

    const allProducts = useData('https://raw.githubusercontent.com/Khurshida-Meem/fake-Datas/main/e-commerce/products');


    useEffect((() => {
        setProducts(allProducts.slice(0, 6));
    }), [allProducts])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Box sx={{ p: '0 20px' }}>
            <Slider {...settings}>
                {
                    products.map(product => (
                        <ProductSlideCard product={product} key={product.key }/>
                    ))
                }
            </Slider>
        </Box>
    );
};

export default ProductSlider;