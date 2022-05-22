import { Box, ButtonGroup } from '@mui/material';
import React from 'react';
import { Flex, PrimaryButton } from '../../Element.styled';

const CartItem = ({ item }) => {
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
                        <h3 style={{ color: 'var(--color-primary)' }}>x 1</h3>
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
                        >
                            -
                        </PrimaryButton>
                    </ButtonGroup>
                    <Box sx={{ display: { md: 'none' } }}><h2>$45.20</h2></Box>
                </Box>
                <Box sx={{ display: { xs: 'none', md: 'block' } }}><h2>$45.20</h2></Box>
            </Box>
            <hr />

        </div>
    );
};

export default CartItem;