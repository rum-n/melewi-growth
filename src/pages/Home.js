import React from 'react';
import Clients from './../components/clients/Clients';
import './styles.css';

const Home = () => {

    return (
    <div className='main-content'>
        <h1 className='title'>Super-fast, <br/>business-focused <br/> <span id='spin'></span><br/>for growing companies</h1>
        <div className='main-content'>
            <button className='btn-cta'>Book a call</button>
            <Clients/>
            <div className='clients-intro'>
                <h2>Some awesome companies have trusted us with their design needs.</h2> 
                <p>Whether it's a complete website overhaul or a quick presentation <br/> you need to do this Friday, we're here to help!'</p>
            </div>
        </div>
    </div>
    );
}

export default Home; 