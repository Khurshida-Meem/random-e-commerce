import { Box, Rating } from '@mui/material';
import React from 'react';
import { CardCustom, Flex } from '../../Element.styled';

const Product = (props) => {

    const { image, category, title, rating, vendor, price } = props.product;

    return (

        <CardCustom>
            <Box sx={{ textAlign: 'center' }}>
                <img src={image} alt="" height='150px' />
            </Box>
            <p>{category}</p>
            <h4 style={{margin: '8px 0'}}>{title}</h4>
            <Rating name="read-only" value={rating} readOnly />
            <p  style={{marginTop: '8px'}}>By <span style={{ color: 'var(--color-primary)' }}>{vendor}</span></p>
            <Flex style={{marginTop: '8px'}} justify='space-between'>
                <h2>${price}</h2>
                <button>Add</button>
            </Flex>

        </CardCustom>
    );
};

export default Product;