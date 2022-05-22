import { Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { Flex, PrimaryButton } from '../../Element.styled';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const CartDialog = (props) => {

    const cartContext = useContext(CartContext);
    const { items } = cartContext;

    const descriptionElementRef = React.useRef(null);
    useEffect(() => {
        if (props.open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [props.open]);

    return (
        <div>

            <Dialog
                open={props.open}
                onClose={props.onCartClick}
                scroll='paper'
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">
                    <Box>
                        <Typography sx={{ fontWeight: '700' }} id="keep-mounted-modal-title" variant="h6" component="h2">
                            All Orders
                        </Typography>
                    </Box>
                </DialogTitle>
                <DialogContent dividers='paper'>
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                    >
                        {
                            items.map(item => (
                                <CartItem key={item.id} item={item} />
                            ))
                        }
                    </DialogContentText>
                    <Flex justify='space-between'>
                        <Typography sx={{ fontWeight: '700' }} id="keep-mounted-modal-title" variant="h6" component="h2">
                            Sub Total
                        </Typography>
                        <Box><h2>$45.20</h2></Box>
                    </Flex>
                </DialogContent>
                <DialogActions>
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
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default CartDialog;