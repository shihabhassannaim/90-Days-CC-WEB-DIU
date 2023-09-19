import React from 'react';
import './Header.css'
import logo from '../../images/whiteLogo.png'

const Header = () => {
    return (
        <div className='navbar pt-4 flex ml-32'>
                <div className='logo ml-10 mt-2.5 mr-20'><img className='w-20' src={logo} alt="" /></div>
                <input className='search-bar bg-transparent border-solid border-2 border-green-300 rounded-xl w-80 h-10 align-middle mt-2 pl-5' type="text" placeholder='Search Your Destination...'/>
                <div className="header-option py-4"><p>NEWS</p></div>
                <div className="header-option py-4"><p>DESTINATION</p></div>
                <div className="header-option py-4"><p>BLOG</p></div>
                <div className="header-option py-4"><p>CONTACT</p></div>
                <div className="header-option py-2.5"><button className='login-btn w-20 h-9 rounded-md bg-cyan-500 hover:bg-cyan-600 font-bold'>LOGIN</button></div>
        </div>
        
    );
};

export default Header;