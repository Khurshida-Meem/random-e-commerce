import { Box, Rating } from '@mui/material';
import React, { useContext } from 'react';
import { CardCustom, PrimaryButton } from '../../../Element.styled';
import { AiOutlineShoppingCart } from "react-icons/ai";
import ProgressBar from "@ramonak/react-progress-bar";
import '../BestSales.css'
import CartContext from '../../../store/cart-context';

const ProductSlideCard = (props) => {

    const { key, image, category, title, rating, price, available, sold } = props.product;

    const cartContext = useContext(CartContext);

    const addToCartHandler = () => {
        cartContext.addItem({
            image,
            id: key,
            name: title,
            amount: 1,
            price
        })
    }

    return (
        <div style={{ marginLeft: '10px' }}>
            <CardCustom
                style={{ margin: '0' }}
                height='400px'
            >
                <Box sx={{ textAlign: 'center' }}>
                    <img src={image} alt="" height='150px' />
                </Box>
                <p style={{ fontSize: '14px' }}>{category}</p>
                <h4 style={{ margin: '8px 0' }}>{title}</h4>
                <Rating name="read-only" value={rating} readOnly />
                <h2 style={{ color: 'var(--color-primary)', margin: '8px 0' }}>${price}</h2>

                <ProgressBar
                    completed={sold}
                    maxCompleted={available}
                    bgColor="var(--color-primary)"
                    height="6px"
                    baseBgColor="var(--color-light)"
                    labelClassName="label"
                    animateOnRender
                />
                <small>Sold:{sold}/{available}</small>
                <Box style={{ marginTop: '24px', textAlign: 'center' }}>
                    <PrimaryButton
                        bg='var(--color-primary)'
                        padding='12px 30px'
                        color='var(--color-white)'
                        radius='4px'
                        fSize='14px'
                        hoverBg='var(--color-yellow)'
                        hoverColor='var(--color-white)'
                        mt='-8px'
                        onClick={addToCartHandler}
                    ><AiOutlineShoppingCart /> Add To Cart</PrimaryButton>
                </Box>

            </CardCustom>
        </div>
    );
};

export default ProductSlideCard;