import { Box, Container } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../../assets/logo.svg'
import { Flex } from '../../Element.style';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


// search field style
const inputStyle = {
    outline: 'none',
    border: '0px',
    borderLeft: '2px solid #6c757d',
    padding: '0 8px',
    marginLeft: '4px',
    fontSize: '16px'
}

// search container
const searchContainer = {
    border: '2px solid #BCE3C9',
    padding: '5px 20px',
    borderRadius: '4px'
}

// badge style
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

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

                </Box>
            </Flex>
        </Container>
    );
};

export default TopNav;