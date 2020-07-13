import React from 'react';
import './styles.css';
import sales from './../../img/sales.svg';
import marketing from './../../img/marketing-team.svg';
import design from './../../img/design-team.svg';
import bullet from './../../img/logobullet.png';

const Target = () => {
    return (
        <div className='target'>
            <h2 className='target-title'>Who can benefit from our offering?</h2>
            <h3 className='target-subtitle'>Just a few examples of the teams we've helped</h3>
            <div className='target-list'>
                <div className='target-card'>
                    <h3>Marketing & Ad teams</h3>
                    <img src={marketing} alt='Marketing'/>
                    <p>Too often we see marketing teams in organizations being occupied by designing endless brochures, creating visuals for social media posts, or the company's latest t-shirt line.</p>
                    <p>Let us handle the boring stuff and move those pixels around, while you focus on the bigger picture - how to bring your product to market.</p>
                    <ul>
                        <li style={{fontWeight: '800'}}><img src={bullet} alt='Melewi Pettel'/>Tight deadline? We do things fast!</li>
                        <li style={{fontWeight: '800'}}><img src={bullet} alt='Melewi Pettel'/>We'll adopt your brand as our own.</li>
                    </ul>
                </div>
                <div className='target-card'>
                    <h3>BD & Sales teams</h3>
                    <img src={sales} alt='Sales'/>
                    <p>Too often we see marketing teams in organizations being occupied by designing endless brochures, creating visuals for social media posts, or the company's latest t-shirt line.</p>
                    <p>Let us handle the boring part and move pixels around, while you focus on the bigger picture - how to bring your product to market.</p>
                    <ul>
                        <li style={{fontWeight: '800'}}><img src={bullet} alt='Melewi Pettel'/>Tight deadline? We do things fast!</li>
                        <li style={{fontWeight: '800'}}><img src={bullet} alt='Melewi Pettel'/>We'll adopt your brand as our own.</li>
                    </ul>
                </div>
                <div className='target-card'>
                    <h3>Design & Dev teams</h3>
                    <img src={design} alt='Design'/>
                    <p>Too often we see marketing teams in organizations being occupied by designing endless brochures, creating visuals for social media posts, or the company's latest t-shirt line.</p>
                    <p>Let us handle the boring part and move pixels around, while you focus on the bigger picture - how to bring your product to market.</p>
                    <ul>
                        <li style={{fontWeight: '800'}}><img src={bullet} alt='Melewi Pettel'/>Tight deadline? We do things fast!</li>
                        <li style={{fontWeight: '800'}}><img src={bullet} alt='Melewi Pettel'/>We'll adopt your brand as our own.</li>
                    </ul>
                </div>
                <a href='https://cal.mixmax.com/rumenmanev/30'><button className='btn-cta'>Book a call</button></a>
            </div>
        </div>
    )
}

export default Target;