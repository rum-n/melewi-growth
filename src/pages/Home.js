import React from 'react';
import Clients from './../components/clients/Clients';
import { Link } from 'react-router-dom';
import Oval from './../components/oval/Oval';
import ServiceList from './../components/serviceList/ServiceList';
import Target from './../components/target/Target';
import Process from './../components/process/Process';
import Contact from './../components/contact/Contact';
import './styles.css';

const Home = () => {

    return (
    <div>
        <h1 className='title'>Super-fast, <br/>business-focused <br/> <span id='spin'></span><br/>for growing companies</h1>
        <div className='main-content'>
            <Oval/>
            <div className='header-buttons'>
                <button className='btn-cta'>Book a call</button>
                <Link to='/services'><button className='btn-see-more'>See how we can help</button></Link>
            </div>
            <Clients/>
            <div className='clients-intro'>
                <h2>Some awesome companies have trusted us with their design needs.</h2> 
                <p>Whether it's a complete website overhaul or a quick presentation <br/> you need to do this Friday, we're here to help!</p>
            </div>
            <ServiceList/>
            <Target/>
            <Process/>
            <Contact/>
        </div>
    </div>
    );
}

export default Home; 