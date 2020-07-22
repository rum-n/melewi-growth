import React from 'react';
import './styles.css';
import Testimonials from './../testimonials/Testimonials';

const Contact = () => {
    return (
        <div className='contact-wrapper'>
            <Testimonials/>
            <div>
                <h2 className='contact-title'><span>Interested?</span><br/>Let's get <br/>you set up!</h2>
                <a href='https://cal.mixmax.com/rumenmanev/30'><button className='btn-cta'>Book a call</button></a>
            </div>
        </div>
    )
}

export default Contact;