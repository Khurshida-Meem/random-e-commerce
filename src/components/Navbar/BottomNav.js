import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import { menubar, navlinks } from './styles/BottomNavStyles';
import { Flex } from '../../Element.styled';
import CategoryButton from './CategoryButton';
import { NavLink } from 'react-router-dom';
import img from '../../assets/icon-headphone (1).svg'

const links = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'Deals',
        path: '/deals'
    },
    {
        name: 'About',
        path: '/about'
    },
    {
        name: 'Shop',
        path: '/shop'
    },
    {
        name: 'Vendors',
        path: '/vendors'
    },
    {
        name: 'Blogs',
        path: '/blogs'
    },
]

const BottomNav = () => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <AppBar position="static" sx={menubar}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            sx={{ mt: '-140px' }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {links.map((page) => (
                                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page.name}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Flex>
                            <Box sx={{ ml: '10px' }}>
                                <CategoryButton />
                                
                            </Box>
                            <Box sx={{ display: 'flex', ml: '150px' }}>
                                {
                                    links.map(link => (
                                        <NavLink
                                            style={navlinks}
                                            activeStyle={{
                                                color: 'var(--color-primary)'
                                            }}
                                            key={link.name}
                                            to={link.path}
                                            onClick={handleCloseNavMenu}>
                                            {link.name}
                                        </NavLink>
                                    ))
                                }


                            </Box>

                        </Flex>
                        <Flex style={{ marginLeft: 'auto' }}>
                            <img src={img} alt="" />
                            <Box>
                                <h2 style={{ color: 'var(--color-primary)' }}>1234-5678</h2>
                                <small style={{ color: 'var(--color-gray)' }}>24/7 Support Center</small>
                            </Box>
                        </Flex>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default BottomNav;