import { Box, Rating } from '@mui/material';
import React from 'react';
import { CardCustom, Flex, PrimaryButton } from '../../Element.styled';
import { AiOutlineShoppingCart } from "react-icons/ai";


const Product = (props) => {

    const { image, category, title, rating, vendor, price } = props.product;

    return (

        <CardCustom>
            <Box sx={{ textAlign: 'center' }}>
                <img src={image} alt="" height='150px' />
            </Box>
            <p style={{ fontSize: '14px' }}>{category}</p>
            <h4 style={{ margin: '8px 0' }}>{title}</h4>
            <Rating name="read-only" value={rating} readOnly />
            <p style={{ marginTop: '8px' }}>By <span style={{ color: 'var(--color-primary)' }}>{vendor}</span></p>
            <Flex style={{ marginTop: '8px' }} justify='space-between'>
                <h2>${price}</h2>
                <PrimaryButton
                    bg='var(--color-light)'
                    padding='6px 20px 6px 20px'
                    color='var(--color-primary)'
                    radius='4px'
                    fSize='14px'
                    hoverBg='var(--color-primary)'
                    hoverColor='var(--color-white)'
                    mt='-8px'
                ><AiOutlineShoppingCart /> Add</PrimaryButton>
            </Flex>

        </CardCustom>
    );
};

export default Product;