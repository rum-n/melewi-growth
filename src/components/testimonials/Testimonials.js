import React from 'react';
import './styles.css';
import daniel from './../../img/daniel.png';
import boris from './../../img/boris.png';
import gideon from './../../img/gideon.png';
import jeffrey from './../../img/jeffrey.png';

const Testimonials = () => {
    return (
        <div className='testimonials'>
            <div className='testimonials-1'>
                <div className='testimonial'>
                    <div className='client'>
                        <img src={daniel} alt='Daniel Lee'/>
                        <div className='testimonial-client-details'>
                            <p className='client-name'>Daniel Lee</p>
                            <p className='client-company'>McDonald's</p>
                        </div>
                    </div>
                    <p>"The Melewi team are an outstanding design partner - agile, fast, committed, and above all easy to work with plenty of initiative, that results in work that looks great. In fact, they set the standard for what working with a design agency should be."</p>
                </div>
                <div className='testimonial'>
                    <div className='client'>
                        <img src={boris} alt='Boris Masis'/>
                        <div className='testimonial-client-details'> 
                            <p className='client-name'>Boris Masis</p>
                            <p className='client-company'>Samsung</p>
                        </div>
                    </div>
                    <p>"Quality. Versatility. Results. From concept decks to mockups to fully-interactive prototypes, Melewi delivered superb quality and creative thinking at each step of the way. The final output was beautiful, and Samsung was lucky to be able to attract such a strong design team."</p>
                </div>
            </div>
            <div className='testimonials-2'>
                <div className='testimonial'>
                    <div className='client'>
                        <img src={gideon} alt='Gideon Simons'/>
                        <div className='testimonial-client-details'>
                            <p className='client-name'>Gideon Simons</p>
                            <p className='client-company'>Mediacorp</p>
                        </div>
                    </div>
                    <p>"Melewi gave us a unique opportunity to experience their well organised and effective workflow that defies geography and timezones. It’s a great feeling to work with talented professionals that are genuinely interested in delivering the best solution to meet our business goals."</p>
                </div>
                <div className='testimonial'>
                    <div className='client'>
                        <img src={jeffrey} alt='Jeffrey Liu'/>
                        <div className='testimonial-client-details'>
                            <p className='client-name'>Jeffrey Liu</p>
                            <p className='client-company'>Guavapass</p>
                        </div>
                    </div>
                    <p>"Melewi has been a fantastic partner. I like how they were personally invested in our product, and would actively reachout when they saw something on our site or app that they thought that we could do better. Their entire team is creative,passionate, and very easy to work with!"</p>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;