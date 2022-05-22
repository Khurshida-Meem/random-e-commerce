import { Box, Modal } from '@mui/material';
import React from 'react';
import { PrimaryButton } from '../../Element.styled';
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

    // const [open, setOpen] = React.useState(true);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);

    return (
        <div>
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            <Modal
                keepMounted
                open={props.open}
                onClose={props.onCartClick}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    <CartItem />
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