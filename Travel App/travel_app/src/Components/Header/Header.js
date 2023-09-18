import React from 'react';
import './Header.css'
import logo from '../../images/whiteLogo.png'

const Header = () => {
    return (
        <div className='navbar'>
                <div className='logo'><img src={logo} alt="" /></div>
                <input className='search-bar' type="text" placeholder='Search Your Destination...'/>
                <div className="header-option"><p>NEWS</p></div>
                <div className="header-option"><p>DESTINATION</p></div>
                <div className="header-option"><p>BLOG</p></div>
                <div className="header-option"><p>CONTACT</p></div>
                <div className="header-option"><button className=' login-btn'>Login</button></div>
        </div>
        
    );
};

export default Header;