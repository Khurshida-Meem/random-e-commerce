import { Box, Container } from '@mui/material';
import React from 'react';
import { visibility } from '../../Element.style';
import { Flex } from '../../Element.styled';
import './BestSales.css';
import LeftCompo from './Contents/LeftCompo';

const BestSales = () => {
    return (
        <Container>
            <Flex>
                <Box sx={visibility}>
                    <LeftCompo />
                </Box>
            </Flex>
        </Container>
    );
};

export default BestSales;