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
                        <li style={{fontWeight: '800'}}><img src={bullet} alt='Melewi Pettel'/>Designs made for your audience.</li>
                    </ul>
                </div>
                <div className='target-card'>
                    <h3>BD & Sales teams</h3>
                    <img src={sales} alt='Sales'/>
                    <p>Do you feel like you're spending more time creating PowerPoint presentation, than actually pitching in front of potential clients?</p>
                    <p>Focus on what you do best and we'll make sure you have a secret weapon - an awesome presentation, tailored to your target audience that will make them unable to refuse your offer!</p>
                    <ul>
                        <li style={{fontWeight: '800'}}><img src={bullet} alt='Melewi Pettel'/>Need to pitch? We got you!</li>
                        <li style={{fontWeight: '800'}}><img src={bullet} alt='Melewi Pettel'/>Designs tailored to your leads.</li>
                        <li style={{fontWeight: '800'}}><img src={bullet} alt='Melewi Pettel'/>Close deals through great design.</li>
                    </ul>
                </div>
                <div className='target-card'>
                    <h3>Design & Dev teams</h3>
                    <img src={design} alt='Design'/>
                    <p>If your design team is feeling stretched between new design projects coming in and constant revision requests from ongoing ones, our team is here to help!</p>
                    <p>We'll become like an extension of your team, fitting right into your work process to deliver the designs you need. That way, you can focus on what's important   .</p>
                    <ul>
                        <li style={{fontWeight: '800'}}><img src={bullet} alt='Melewi Pettel'/>Undercapacity? We'll help!</li>
                        <li style={{fontWeight: '800'}}><img src={bullet} alt='Melewi Pettel'/>We'll adopt your work process.</li>
                        <li style={{fontWeight: '800'}}><img src={bullet} alt='Melewi Pettel'/>Expand your team as needed.</li>
                    </ul>
                </div>
                <a href='https://cal.mixmax.com/rumenmanev/30'><button className='btn-cta'>Book a call</button></a>
            </div>
        </div>
    )
}

export default Target;