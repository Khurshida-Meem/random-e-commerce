import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.svg'
import { FooterCompo } from '../../Element.styled';

const company = [
    'About Us',
    'Delivery Information',
    'Privacy Policy',
    'Terms & Conditions',
    'Contact Us',
    'Support Center',
    'Careers'
];
const account = [
    'Sign In',
    'View Cart',
    'My Wishlist',
    'Track My Order',
    'Help Ticket',
    'Shipping Details',
    'Compare Products'
    
];

const corporate = [
    'Become a Vendor',
    'Affiliate Program',
    'Farm Business',
    'Farm Careers',
    'Our Suppliers',
    'Accessibility',
    'Promotions'
]

const Footer = () => {
    return (
            <Container sx={{ pb: '50px', mt: '100px' }}>
                <Grid container spacing={{ xs: 12, md: 3 }}>
                    <Grid item sm={12} md={3}>
                        <img src={logo} alt="" />
                        <Typography sx={{ color: 'var(--color-text)', fontFamily: 'Quicksand', fontWeight: '700', mb: '20px' }} variant="h6" component="div" gutterBottom>
                            Awesome grocery store
                        </Typography>
                        <Typography sx={{ color: '#787C8B' }} variant="p" component="div" gutterBottom>
                            Germany —
                            785 15h Street, Office 478
                            Berlin, De 81566

                            info@email.com
                            <hr style={{ margin: '10px 0 20px 0' }} />
                            <span>1234567</span>

                        </Typography>
                    </Grid>
                    <Grid item sm={12} md={3} sx={{ textAlign: 'center' }}>
                        <Typography sx={{ color: 'var(--color-text)', fontWeight: '700', mb: '20px' }} variant="h6" component="div" gutterBottom>
                            Company
                        </Typography>

                        {
                            company.map(link => (
                                <Box>
                                    <Typography className='links' sx={{ color: '#787C8B' }} variant="p" component="div" gutterBottom>
                                        <FooterCompo>
                                            {link}
                                        </FooterCompo>
                                    </Typography>
                                    <div className='border'></div>
                                </Box>

                            ))
                        }
                    </Grid>
                    <Grid item sm={12} md={3} sx={{ textAlign: 'center' }}>
                        <Typography sx={{ color: 'var(--color-text)', fontWeight: '700', mb: '20px' }} variant="h6" component="div" gutterBottom>
                            Account
                        </Typography>

                        {
                            account.map(link => (
                                <Box>
                                    <Typography className='links' sx={{ color: '#787C8B' }} variant="p" component="div" gutterBottom>
                                        <FooterCompo>
                                            {link}
                                        </FooterCompo>
                                        
                                    </Typography>
                                    <div className='border'></div>
                                </Box>

                            ))
                        }
                    </Grid>
                    <Grid item sm={12} md={3} sx={{ textAlign: 'center' }}>
                    <Typography sx={{ color: 'var(--color-text)', fontWeight: '700', mb: '20px' }} variant="h6" component="div" gutterBottom>
                            Corporate
                        </Typography>

                        {
                            corporate.map(link => (
                                <Box>
                                    <Typography className='links' sx={{ color: '#787C8B' }} variant="p" component="div" gutterBottom>
                                        <FooterCompo>
                                            {link}
                                        </FooterCompo>
                                        
                                    </Typography>
                                    <div className='border'></div>
                                </Box>

                            ))
                        }
                    </Grid>
                </Grid>
                <Box>
                    <hr style={{ margin: '50px 0 20px 0' }} />
                    <Typography sx={{ color: '#787C8B' }} variant="p" component="div" gutterBottom>
                        © 2022. All Rights Reserved.
                    </Typography>
                </Box>

            </Container>
    );
};

export default Footer;