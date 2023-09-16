import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <div>
            <header>
                <div className='logo'><img src={logo} alt="" /></div>
                <div className='search-bar'><p>Search your Destination...</p></div>
                <div className="header-option"><p>NEWS</p></div>
                <div className="header-option"><p>DESTINATION</p></div>
                <div className="header-option"><p>BLOG</p></div>
                <div className="header-option"><p>CONTACT</p></div>
                <div className="header-option login-btn"><p>LOGIN</p></div>
            </header>
        </div>
    );
};

export default Header;