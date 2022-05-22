import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { ButtonSecondary, Flex } from '../../Element.styled';
import { BsArrowRightShort } from "react-icons/bs";
import './Featured.css'

const featured = [
    {
        className: 'featured-bg-1 featured-bg',
        heading: 'Everyday Fresh & Clean with Our Products'
    },
    {
        className: 'featured-bg-2 featured-bg',
        heading: 'Make your Breakfast Healthy and Easy'
    },
    {
        className: 'featured-bg-3 featured-bg',
        heading: 'The best Organic Products Online'
    },
];

const featuredCard = {
    margin: '10px',

}

const Featured = () => {
    return (
        <Container sx={{ display: { sm: 'flex' }, mt: '50px' }}>
            {
                featured.map(feature => (
                    <div
                        style={featuredCard}
                        className={feature.className}
                        key={feature.heading}
                    >
                        <Box sx={{ padding: '50px 40px' }}>
                            <Typography sx={{ color: 'var(--color-text)', fontWeight: '700' }} variant="h5" gutterBottom component="div">
                                {feature.heading}
                            </Typography>
                            <ButtonSecondary className='banner-button-container' padding='6px 14px' radius='3px'>
                                <Flex>
                                    <span>Shop Now </span><BsArrowRightShort className='arrow' />
                                </Flex>
                            </ButtonSecondary>
                        </Box>

                    </div>
                ))
            }
        </Container>
    );
};

export default Featured;