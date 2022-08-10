import React from 'react';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';
/* eslint-disable */ 
const Navbar = () => {

    return (
        <>
        <nav className='navbar'>
        <h1 className='title'>Math Magician</h1>
        <ul className='navList'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/calculator'>Calculator</Link></li>
            <li><Link to='/quote'>Quote</Link></li>
        </ul>
        </nav>
        
        </>
    );
};

export default Navbar;
