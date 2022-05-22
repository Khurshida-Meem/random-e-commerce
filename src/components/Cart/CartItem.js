import { Box, ButtonGroup, Typography } from '@mui/material';
import React from 'react';
import pro1 from '../../assets/cat-11.png'
import { Flex, PrimaryButton } from '../../Element.styled';

const CartItem = () => {
    return (
        <div>
            <Box>
                <Typography sx={{ fontWeight: '700' }} id="keep-mounted-modal-title" variant="h6" component="h2">
                    All Orders
                </Typography>
            </Box>
            <hr />
            <Box sx={{
                display: { md: 'flex' },
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Flex>
                    <img src={pro1} alt="" />
                    <Box>
                        <h3>Title</h3>
                        <h2>$45.20</h2>
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

            <Flex justify='space-between'>
                <Typography sx={{ fontWeight: '700' }} id="keep-mounted-modal-title" variant="h6" component="h2">
                    Sub Total
                </Typography>
                <Box><h2>$45.20</h2></Box>
            </Flex>            

        </div>
    );
};

export default CartItem;