import React, {useState} from 'react';
import CartDialog from '../Cart/CartDialog';
import BottomNav from './BottomNav';
import TopNav from './TopNav';

const Navbar = () => {

    const [open, setOpen] = useState(false);
    const handleCartClick = () => setOpen(!open);

    return (
        <>
            {open && <CartDialog open={open} onCartClick={handleCartClick} />}
            <TopNav onCartClick={handleCartClick} />
            <hr />
            <BottomNav />
        </>
    );
};

export default Navbar;