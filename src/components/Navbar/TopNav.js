import { Box, Container } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../../assets/logo.svg'
import { Flex } from '../../Element.styled';
import Badge from '@mui/material/Badge';
import { ThemeProvider } from '@mui/material/styles';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsPerson } from "react-icons/bs";
import { iconStyle, inputStyle, searchContainer, searchIcon, theme, badgetext } from './styles/TopNavStyles';
import { visibility } from '../../Element.style';


const TopNav = () => {
    return (
        <Container sx={{ my: '20px' }}>
            <Flex justify='space-evenly'>

                <Box sx={{display: { xs: 'block', md: 'none' }}}>
                    <img src={logo} alt="" width='120px' />
                </Box>
                <Box sx={{display: { xs: 'none', md: 'block' }}}>
                    <img src={logo} alt=""  />
                </Box>
                    
                {/* =================== search field ======================== */}
                <Box style={searchContainer} sx={visibility}>
                    <Flex>
                        <SearchIcon sx={searchIcon} />
                        <input style={inputStyle} type="text" placeholder='Search for Items' />
                    </Flex>
                </Box>

                {/* ==================== badges ===================== */}
                <Box>
                    <ThemeProvider theme={theme}>
                        <Flex justify='space-evenly'>
                            <Flex>
                                <Badge badgeContent={4} color="neutral">
                                    <AiOutlineShoppingCart style={iconStyle} />
                                </Badge>
                                <Box sx={visibility}>
                                    <p style={badgetext}>Cart</p>
                                </Box>
                            </Flex>
                            <Flex>
                                <Badge badgeContent={4} color="neutral">
                                    <IoIosHeartEmpty style={iconStyle} />
                                </Badge>
                                <Box sx={visibility}>
                                    <p style={badgetext}>Wishlist</p>
                                </Box>

                            </Flex>
                            <Box sx={visibility}>
                                <Flex >
                                    <Box color="neutral">
                                        <BsPerson style={iconStyle} />
                                    </Box>
                                    <Box>
                                        <p style={badgetext}>Account</p>
                                    </Box>

                                </Flex>
                            </Box>

                        </Flex>

                    </ThemeProvider>

                </Box>

            </Flex>
        </Container>
    );
};

export default TopNav;