import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import logo from './../../img/logo.png';

const Footer = () => {
    return (
        <footer>
            <div className='footer-logo'>
                <img src={logo} alt='Melewi Logo'/>
                <p className='credits'>Created by <a href='https://melewi.net'>Melewi</a> © 2020. <br/> All rights reserved.</p>
            </div>
            <div className='footer-menu'>
                <Link to='/services'><h3>Our services</h3></Link>
                <ul>
                    <li>Web Design</li>
                    <li>Mobile Design</li>
                    <li>Frontend Dev</li>
                    <li>Branding & Logo design</li>
                    <li>Presentation Design</li>
                    <li>Marketing Design</li>
                </ul>
            </div>
            <div className='blog-feature'>
                <Link to='/pricing'><h3>Pricing</h3></Link>
                <Link to='case-studies'><h3>Case Studies</h3></Link>
                <h3>Featured from our blog</h3>   
                <ul>
                    <li><a href='https://melewi.net/blog/2016/10/11/4-things-to-think-about-before-creating-your-product/'>4 Things to Think About Before Creating Your Product</a></li>
                    <li><a href='https://melewi.net/blog/2019/10/09/how-to-reduce-churn-during-a-major-redesign/'>How to Reduce Churn During a Major Redesign</a></li>
                    <li><a href='https://melewi.net/blog/2018/10/23/designing-products-for-users-around-the-world/'>Designing products for users around the world</a></li>
                    {/* <li><a href='https://melewi.net/blog/2018/10/04/does-anyone-still-use-snapchat/'>Does anyone still use Snapchat?</a></li> */}
                </ul>
            </div>
            <div className='footer-cta'>
                <h3>Want to know more?</h3>
                <a href='https://cal.mixmax.com/rumenmanev/30'><button>Book a call</button></a>
                <h3>Want to join the team?</h3>
                <button>Apply here</button>
            </div>
        </footer>
    )
}

export default Footer;