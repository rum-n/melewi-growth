import React from 'react';
import './styles.css';
import bullet from './../img/logobullet.png';
import Faq from './../components/FAQ/Faq';

const Pricing = () => {

    return (
    <div className='pricing-content'>
        <h1 className='title'>Pricing</h1>
        <h2>Our pricing is flexibly created to fit every design need. <br/> Still, if there's something else you have in mind, feel free to reach out to us and we'll be happy to discuss a custom price plan.</h2>
        <div className='pricing-options'>
            <div className='price-plan'>
                <h3>Alpha</h3>
                <p>Hey, it's a good start. Suitable for startups & SMEs that want to grow and need to attract new users.</p>
                <p className='price'>$1,800</p>
                <div className='features'>
                    <ul>
                        <li><img src={bullet} alt='Melewi Pettel'/>20 hours of design work</li>
                        <li><img src={bullet} alt='Melewi Pettel'/>up to 48 hours response time</li>
                        <li><img src={bullet} alt='Melewi Pettel'/>dedicated project manager</li>
                    </ul>
                </div>
            </div>
            <div className='price-plan'>
                <h3>Phi</h3>
                <p>Now you're serious. Ideal for teams in big corporations, who are looking to wow both clients and co-workers.</p>
                <p className='price'> $5,400</p>
                <div className='features'>
                    <ul>
                        <li><img src={bullet} alt='Melewi Pettel'/>60 hours of design work</li>
                        <li><img src={bullet} alt='Melewi Pettel'/>up to 24 hours response time</li>
                        <li><img src={bullet} alt='Melewi Pettel'/>dedicated project manager</li>
                    </ul>
                </div>
            </div>  
            <div className='price-plan'>
                <h3>Omega</h3>
                <p>Wow. <br/>With that many design hours, who knows what we can achieve together!</p>
                <p className='price'>$10,800</p>
                <div className='features'>
                    <ul>
                        <li><img src={bullet} alt='Melewi Pettel'/>120 hours of design work</li>
                        <li><img src={bullet} alt='Melewi Pettel'/>up to 12 hours response time</li>
                        <li><img src={bullet} alt='Melewi Pettel'/>dedicated project manager</li>
                    </ul>
                </div>
            </div>
        </div>
        <a href='https://cal.mixmax.com/rumenmanev/30'><button className='btn-cta'>Book a call</button></a>

        <h1 className='title'>FAQ</h1>
        <Faq/>
    </div>
    );
}

export default Pricing; 