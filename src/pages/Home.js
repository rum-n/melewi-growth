import React from 'react';
import Clients from './../components/clients/Clients';
import ServiceList from './../components/serviceList/ServiceList';
import Target from './../components/target/Target';
import Pricing from './Pricing';
import Process from './../components/process/Process';
import Contact from './../components/contact/Contact';
import teamwork9 from './../lottie_animations/teamwork_9.json';
import Lottie from 'react-lottie';
import './styles.css';

const Home = () => {

    const teamworkOptions = {
        loop: true,
        autoplay: true,
        animationData: teamwork9,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
    <div>
        <h1 className='title'>Super-fast, <br/>business-focused <br/> <span className='mobile-title'>on-demand design</span><span id='spin'></span><br/>for growing companies</h1>
        <div className='main-content'>
            
            <div className='lottie'>
                <Lottie options={teamworkOptions} height={500} width={500}/>
            </div>

            <div className='header-buttons'>
                <a href='https://cal.mixmax.com/rumenmanev/30'><button className='btn-cta'>Book a call</button></a>
                <a href='#services'><button className='btn-see-more'>See how we can help</button></a>
            </div>
            <Clients/>
            <div className='clients-intro'>
                <h2>Some awesome companies have <br/> trusted us with their design needs.</h2> 
                <p>Whether it's a complete website overhaul or a quick <br/> presentation you need to do this Friday, we're here to help!</p>
            </div>
            <ServiceList/>
        </div>
            <Target/>
        <div className='main-content'>
            <Process/>
        </div>
            <Pricing/>
            <Contact/>
    </div>
    );
}

export default Home; 