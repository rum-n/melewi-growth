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
                <li><NavLink to='/services'>How we can help</NavLink></li>
                <li><NavLink to='/case-studies'>Case Studies</NavLink></li>
                <li><NavLink to='/pricing'>Pricing</NavLink></li>
                <li><a href='https://melewi.net/blog'>Blog</a></li>
                <li><button className='btn-cta'>Book a call</button></li>
            </ul>
        </nav>         
    </header>
    )
};

export default Navigation;