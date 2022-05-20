import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';

const ProductCard = (props) => {

    const { title, image, rating, price } = props.product

    return (
        <Card sx={{ display: 'flex', alignItems: 'center', boxShadow: 'none' }}>
            <Box>
                <img src={image} alt="" height='80px' />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto', p: '0' }}>
                    <Typography sx={{ fontWeight: '700' }} color="var(--color-text)" component="div" variant="p">
                        {title}
                    </Typography>
                    <Rating name="read-only" value={rating} readOnly />
                    <Typography sx={{ fontWeight: '700' }} variant="subtitle1" color="var(--color-primary)" component="div">
                        ${price}
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    );
};

export default ProductCard;