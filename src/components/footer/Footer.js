import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import logo from './../../img/logo.png';

const Footer = () => {
    return (
        <footer>
            <div className='footer-logo'>
                <img src={logo} alt='Melewi Logo'/>
                <h2>Creating business-winning prodcuts your users love.</h2>
            </div>
            <div className='footer-menu'>
                <div className='address'>
                    <p>30 Duxton Rd, #02-00, <br/>Singapore 089494, <br/>hello@melewi.net</p>
                </div>
                <div className='quick-links'>
                    <p>Quick Links</p>
                    <ul>
                        <li>Pricing</li>
                        <li>Blog</li>
                        <li>Affiliates</li>
                    </ul>
                </div>
                <div className='footer-services-1'>
                    <p>Our Services</p>
                    <ul>
                        <li>Web Design</li>
                        <li>Mobile Design</li>
                        <li>Frontend Dev</li>
                    </ul>
                </div>
                <div className='footer-services-2'>
                    <ul>
                        <li>Branding & Logo design</li>
                        <li>Presentation Design</li>
                        <li>Marketing Design</li>
                    </ul>
                </div>
                <div className='social'>
                    <h3>Want to know more?</h3>
                    <h3 className='footer-cta'><a href='https://cal.mixmax.com/rumenmanev/30'>Book a call.</a></h3>
                </div>
            </div>
        </footer>
    )
}

export default Footer;