import React from 'react';
import logos1 from './../../img/logos1.png';
import logos2 from './../../img/logos2.png';
import './styles.css';

const Home = () => {

    return (
    <div className='clients'>
        <img src={logos1} alt='Clients Logos'/>
        <img src={logos2} alt='Clients Logos'/>
    </div>
    );
}

export default Home; 