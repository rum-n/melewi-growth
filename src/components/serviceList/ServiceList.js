import React, { useState } from 'react';
import ServiceOval from './../serviceOval/ServiceOval';
import webDesignImg from './../../img/webDesignImg.png';
import mobileMcd from './../../img/mobileMcd.png';
import frontend from './../../img/frontend.png';
import presentation from './../../img/presentation.png';
import branding from './../../img/branding.png';
import './styles.css';

const ServiceList = () => {
    const images = {
        webDesignImg,
        mobileMcd,
        frontend,
        presentation,
        branding
    }

    const [image, setImage] = useState(images.webDesignImg);

    return (
        <div className='services-wrapper'>
            <div>
                <ul className='services-list'>
                    <li onMouseOver={() => setImage(images.mobileMcd)}>Mobile Design</li>
                    <li onMouseOver={() => setImage(images.webDesignImg)}>Web Design</li>
                    <li onMouseOver={() => setImage(images.frontend)}>Frontend</li>
                    <li onMouseOver={() => setImage(images.presentation)}>Presentation Design</li>
                    <li onMouseOver={() => setImage(images.branding)}>Branding & Logo Design</li>
                    <li>Marketing collaterals</li>
                </ul>
            </div>
            <div>
                <ServiceOval/>
                <div className='service-img'>
                    <img src={image} alt='Web Design'/>
                </div>
            </div>
        </div>
    )
}

export default ServiceList;