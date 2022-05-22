import { Box, ButtonGroup } from '@mui/material';
import React, { useContext } from 'react';
import { Flex, PrimaryButton } from '../../Element.styled';
import CartContext from '../../store/cart-context';

const CartItem = ({ item }) => {

    const cartContext = useContext(CartContext);

    let total = (item.amount * item.price).toFixed(2);


    const cartItemRemoveHandler = id => {
        cartContext.removeItem(id);
    }

    const cartItemHandler = item => {
        cartContext.addItem({ ...item, amount: 1 })
    }

    return (
        <div style={{padding: '5px 0'}}>
            <Box sx={{
                display: { md: 'flex' },
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Flex>
                    <img src={item.image} alt="" height='50px' />
                    <Box sx={{ml: '8px', width: '70%'}}>
                        <h3>{item.name}</h3>
                        <h2>{item.price}</h2>
                        <h3 style={{ color: 'var(--color-primary)' }}>x {item.amount}</h3>
                    </Box>
                </Flex>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        <PrimaryButton
                            style={{ borderRight: '1px solid' }}
                            bg='var(--color-light)'
                            padding='4px 16px'
                            color='var(--color-primary)'
                            fSize='20px'
                            hoverBg='var(--color-primary)'
                            hoverColor='var(--color-white)'
                            onClick={cartItemHandler.bind(null, item)}
                        >
                            +
                        </PrimaryButton>

                        <PrimaryButton
                            bg='var(--color-light)'
                            padding='4px 16px'
                            color='var(--color-primary)'
                            fSize='20px'
                            hoverBg='var(--color-primary)'
                            hoverColor='var(--color-white)'
                            onClick={cartItemRemoveHandler.bind(null, item.id)}
                        >
                            -
                        </PrimaryButton>
                    </ButtonGroup>
                    <Box ><h2>${total}</h2></Box>
                </Box>
            </Box>
            <hr />

        </div>
    );
};

export default CartItem;