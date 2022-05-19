import { Rating } from '@mui/material';
import React from 'react';
import img from '../../assets/demo.jpg'
import { CardCustom, Flex } from '../../Element.styled';

const Product = () => {
    return (
        <CardCustom>
            <img src={img} alt="" height='150px' />
            <p>Snack</p>
            <h4>Seeds of Change Organic Quinoa, Brown, & Red Rice</h4>
            <Rating name="read-only" value={4} readOnly />
            <p>By <span style={{color: 'var(--color-primary)'}}>NestFood</span></p>
            <Flex justify='space-between'>
                <h2>$28</h2>
                <button>Add</button>
            </Flex>
            
        </CardCustom>
    );
};

export default Product;