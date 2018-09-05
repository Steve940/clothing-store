import React from 'react';
import './Header.css';
import logo from '../components/images/Logo.png';
import cart from '../components/images/cart.png'

const Header = () => {
    return(
        <div className='header'>
            <img src={logo} alt="SDC"/>
            <p>Free shipping on purchases of $75+</p>
            <img src={cart} alt="Cart"/>
        </div>
    );
}

export default Header;