import { Box, Modal, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { Flex, PrimaryButton } from '../../Element.styled';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '65%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    outline: 'none'
};

const CartModal = (props) => {

    const cartContext = useContext(CartContext);
    const { items } = cartContext;


    return (
        <div>
            <Modal
                keepMounted
                open={props.open}
                onClose={props.onCartClick}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    <Box>
                        <Typography sx={{ fontWeight: '700' }} id="keep-mounted-modal-title" variant="h6" component="h2">
                            All Orders
                        </Typography>
                    </Box>
                    <hr />
                    {
                        items.map(item => (
                            <CartItem key={item.id} item={item} />
                        ))
                    }
                    <Flex justify='space-between'>
                        <Typography sx={{ fontWeight: '700' }} id="keep-mounted-modal-title" variant="h6" component="h2">
                            Sub Total
                        </Typography>
                        <Box><h2>$45.20</h2></Box>
                    </Flex>
                    <Box>
                        <PrimaryButton
                            bg='var(--color-primary)'
                            padding='10px 20px'
                            color='var(--color-white)'
                            radius='5px'
                            fSize='16px'
                            hoverBg='var(--color-button-hover)'
                            onClick={props.onCartClick}
                        >
                            Close
                        </PrimaryButton>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
};

export default CartModal;