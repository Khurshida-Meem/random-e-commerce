import { Box, Rating } from '@mui/material';
import React, { useContext } from 'react';
import { CardCustom, Flex, PrimaryButton } from '../../Element.styled';
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartContext from '../../store/cart-context';


const Product = (props) => {

    const {key, image, category, title, rating, vendor, price } = props.product;

    const cartContext = useContext(CartContext);
    const productPrice = `$${price.toFixed(2)}`;

    const addToCartHandler = amount => {
        cartContext.addItem({
            image,
            id: key,
            name: title,
            amount: 1,
            price: productPrice
        })
    }

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
                <h2>${productPrice}</h2>
                <PrimaryButton
                    bg='var(--color-light)'
                    padding='6px 20px 6px 20px'
                    color='var(--color-primary)'
                    radius='4px'
                    fSize='14px'
                    hoverBg='var(--color-primary)'
                    hoverColor='var(--color-white)'
                    mt='-8px'
                    onClick={addToCartHandler}
                ><AiOutlineShoppingCart /> Add</PrimaryButton>
            </Flex>

        </CardCustom>
    );
};

export default Product;