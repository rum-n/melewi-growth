import React from 'react';
import './styles.css';
import mcd from '../img/mcd.png';
import eight from '../img/eightdays.png';
import v from '../img/vsource.png';
import g from '../img/guavapass.png';
const CaseStudies = () => {

    return (
    <div className='pricing-content'>
        <h1 className='title'>Case Studies</h1>
        <h2>Working with so many different companies has taught us a lot.<br/> Below are just a few of the projects we've done</h2>
        <div className='portfolio'>
            <img src={mcd} alt='McDonalds Singapore'/>
                <div className='case-summary'>
                    <h2>McDonald's</h2>
                    <h3>Web & Mobile Design</h3>
                    <p>One of our longest running partnership. We've helped McDonald's redesign their mobile food delivery app and localize it to over 20 markets across South-East Asia, the Pacific region, the Middle East and Africa.</p>
                    <p>2014 - Present • Asia Pacific, Middle East & Africa</p>
                </div>
            <img src={eight} alt='8 Days Singapore'/>
                <div className='case-summary-right'>
                    <h2>8 Days</h2>
                    <h3>Web Design & Frontend dev</h3>
                    <p>One of our longest running partnership. We've helped McDonald's redesign their mobile food delivery app and localize it to over 20 markets across South-East Asia, the Pacific region, the Middle East and Africa.</p>
                    <p>2016 - Singapore</p>
                </div>
            <img src={v} alt='Vsource Vietnam'/>
                <div className='case-summary'>
                    <h2>Vsource</h2>
                    <h3>Website & Web App design</h3>
                    <p>One of our longest running partnership. We've helped McDonald's redesign their mobile food delivery app and localize it to over 20 markets across South-East Asia, the Pacific region, the Middle East and Africa.</p>
                    <p>2016 - Vietnam & Ireland</p>
                </div>
            <img src={g} alt='GuavaPass Singapore'/>
                <div className='case-summary-right'>
                    <h2>GuavaPass</h2>
                    <h3>Website, Web app & Mobile design + Marketing collaterals</h3>
                    <p>One of our longest running partnership. We've helped McDonald's redesign their mobile food delivery app and localize it to over 20 markets across South-East Asia, the Pacific region, the Middle East and Africa.</p>
                    <p>2015 - South East Asia</p>
                </div>
        </div>
    </div>
    );
}

export default CaseStudies; 