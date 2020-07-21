import React, { useState } from 'react';
import mobileMcd from './../../img/mobileMcd.png';
import frontend from './../../img/frontend.png';
import deck from './../../img/deck.png';
import branding from './../../img/branding.png';
import './styles.css';

const ServiceList = () => {
    const images = {
        deck,
        mobileMcd,
        frontend,
        branding
    }

    const [image, setImage] = useState(images.deck);

    return (
        <div className='services-wrapper'>
            <div>
                <ul className='services-list'>
                    <li>Mobile</li>
                    <li>Web</li>
                    <li>Frontend</li>
                    <li onClick={() => setImage(images.deck)}>Deck</li>
                    <li>Branding & Logo</li>
                    <li>Marketing collaterals</li>
                </ul>
            </div>
            <div>
                <div className='service-img'>
                    <img src={image} alt='Web Design'/>
                </div>
            </div>
        </div>
    )
}

export default ServiceList;