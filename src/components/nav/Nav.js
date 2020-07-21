import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './styles.css';
import logo from '../../img/logo.png';

const Navigation = () => {
    return (
    <header>
        <Link to='/'>
            <div className='logo'>
                <img src={logo} alt='Logo'/>
            </div>
        </Link>
        <nav>
            <ul className='menu'>
                <li><a href='#services'>How we can help</a></li>
                <li><NavLink to='/case-studies'>Case Studies</NavLink></li>
                <li><a href='#pricing'>Pricing</a></li>
                <li><a href='https://melewi.net/blog'>Blog</a></li>
                {/* <li><NavLink to='/affiliates'>Affiliates</NavLink></li> */}
                <li><a href='https://cal.mixmax.com/rumenmanev/30'><button className='nav-cta'>Book a call</button></a></li>
            </ul>
        </nav>         
    </header>
    )
};

export default Navigation;