import { Box } from '@mui/material';
import React from 'react';
import { Flex, PrimaryButton } from '../../../Element.styled';
import { BannerH1, Bannerp, buttonStyle, iconStyle, inputContainer, inputStyle } from './BannerSlider.style';
import { FiSend } from "react-icons/fi";


const SlideContent = (props) => {

    const { heading, paragraph } = props
    return (
        <div>
            <BannerH1>{heading}</BannerH1>
            <Bannerp>{paragraph}</Bannerp>
            <Flex style={{margin: '20px 0 0 30px'}}>
                <Box sx={inputContainer}>
                    <FiSend style={iconStyle} />
                    <input style={inputStyle} type="text" placeholder="Your email address" />
                </Box>
                <PrimaryButton
                    bg='var(--color-primary)'
                    padding='10px 20px'
                    color='var(--color-white)'
                    radius='50px'
                    fSize='16px'
                    hoverBg='var(--color-button-hover)'
                    style={buttonStyle}>Subscribe</PrimaryButton>
            </Flex>
            
            
        </div>
    );
};

export default SlideContent;