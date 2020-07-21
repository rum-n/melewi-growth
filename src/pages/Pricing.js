import React from 'react';
import './styles.css';
import bullet from './../img/logobullet.png';
import Faq from './../components/FAQ/Faq';

const Pricing = () => {

    return (
    <div className='pricing-content'>
        <h1 className='title'>Pricing</h1>
        <p>Our pricing is flexibly created to fit every design need. <br/> Still, if there's something else you have in mind, feel free to <br/> reach out to us and we'll be happy to discuss a custom price plan.</p>
        <div className='pricing-options'>
            <div className='price-plan'>
                <h3>Essentials</h3>
                <p className='price-summary'>Hey, it's a good start. Suitable for startups & SMEs that want to grow and need to attract new users.</p>
                <p className='price'>$1,500</p>
                <div className='features'>
                    <ul>
                        <li><img src={bullet} alt='Melewi Pettel'/>20 hours of design work</li>
                        <li><img src={bullet} alt='Melewi Pettel'/>up to 48 hours response time</li>
                        <li><img src={bullet} alt='Melewi Pettel'/>dedicated project manager</li>
                        <li><img src={bullet} alt='Melewi Pettel'/>a place for your design assets</li>
                    </ul>
                </div>
            </div>
            <div className='price-plan best-deal'>
                <h3>Good Deal</h3>
                <p className='price-summary'>Now you're serious. Ideal for teams in big corporations, who are looking to wow both clients and co-workers.</p>
                <p className='price'> $4,500</p>
                <div className='features'>
                    <ul>
                        <li><img src={bullet} alt='Melewi Pettel'/>60 hours of design work</li>
                        <li><img src={bullet} alt='Melewi Pettel'/>up to 24 hours response time</li>
                        <li><img src={bullet} alt='Melewi Pettel'/>dedicated project manager</li>
                        <li><img src={bullet} alt='Melewi Pettel'/>a place for your design assets</li>
                    </ul>
                </div>
            </div>  
            <div className='price-plan'>
                <h3>Might As Well</h3>
                <p className='price-summary'>Wow. With that many design hours, who knows what we can achieve together!</p>
                <p className='price'>$9,000</p>
                <div className='features'>
                    <ul>
                        <li><img src={bullet} alt='Melewi Flower'/>120 hours of design work</li>
                        <li><img src={bullet} alt='Melewi Flower'/>up to 12 hours response time</li>
                        <li><img src={bullet} alt='Melewi Flower'/>dedicated project manager</li>
                        <li><img src={bullet} alt='Melewi Pettel'/>a place for your design assets</li>
                    </ul>
                </div>
            </div>
        </div>
        <a href='https://cal.mixmax.com/rumenmanev/30'><button className='btn-cta pricing-cta'>Book a call</button></a>
        
        <div className='faq-wrapper'>
            <div className='faq-summary'>
                <h1>Things you're most<br/> likely wondering...</h1>
                <p>Haven't found what you're looking for? <br/>Send us an email an we'll promise to get <br/>back to you as soon as possible!</p>
            </div>
            <div>
                <Faq/>
            </div>
        </div>
    </div>
    );
}

export default Pricing; 