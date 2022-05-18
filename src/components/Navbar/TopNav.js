import { Box, Container } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../../assets/logo.svg'
import { Flex } from '../../Element.style';
import Badge from '@mui/material/Badge';
import { ThemeProvider } from '@mui/material/styles';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { iconStyle, inputStyle, searchContainer, theme } from './styles/TopNavStyles';


const TopNav = () => {
    return (
        <Container sx={{ mt: '20px' }}>
            <Flex justify='space-evenly'>
                <img src={logo} alt="" height='60px' />

                {/* =================== search field ======================== */}
                <Box style={searchContainer} sx={{ display: { xs: 'none', md: 'block' } }}>
                    <Flex>
                        <SearchIcon sx={{ color: '#6c757d', fontSize: '26px' }} />
                        <input style={inputStyle} type="text" placeholder='Search for Items' />
                    </Flex>
                </Box>

                {/* ==================== badges ===================== */}
                <Box>
                    <ThemeProvider theme={theme}>
                        <Badge badgeContent={4} color="neutral">
                            <AiOutlineShoppingCart style={iconStyle} />
                        </Badge>
                    </ThemeProvider>
                    
                </Box>

            </Flex>
        </Container>
    );
};

export default TopNav;