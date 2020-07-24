import React from 'react';
import logos1 from './../../img/logos1.png';
import logos2 from './../../img/logos2.png';
import logosmall from './../../img/logowhite.png';
import clientssmall from './../../img/clientssmall.png';
import './styles.css';

const Home = () => {

    return (
    <div className='clients'>
        <div className='grey-logo'>
            <img src={logosmall} alt='Melewi Logo'/>
        </div>
        <img className='clients-big' src={logos1} alt='Clients Logos'/>
        <img className='clients-big' src={logos2} alt='Clients Logos'/>
        <img className='small-clients' src={clientssmall} alt='Melewi Clients'/>
    </div>
    );
}

export default Home; 