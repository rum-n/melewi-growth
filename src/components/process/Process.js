import React from 'react';
import './styles.css';

const Process = () => {
    return (
        <div className='process-wrapper'>
            <h2 className='process-title'>Wait! So how does it work?</h2>
            <div className='process-list'>
                <div className='step-1'>
                    <h3>Book a call with one of our consultants.</h3>
                </div>
                <div className='step-2'>
                    <h3>Discuss requirements & help select a plan that works for you.</h3>
                </div>
                <div className='step-3'>
                    <h3>Get access to a private channel. </h3>
                </div>
                <div className='step-4'>
                    <h3>Just tell us what you need and our design team will deliver.</h3>
                </div>
            </div>
        </div>
    )
}

export default Process;