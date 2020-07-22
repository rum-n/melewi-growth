import React from 'react';
import './styles.css';
import faqsData from './faqsData';
import FaqPlus from './../faq-plus/FaqPlus';
import { Accordion, AccordionItem, AccordionHeader, AccordionPanel } from "@chakra-ui/core";

const Faq = () => {
    
    return (
        <div className='faq-area'>
        <Accordion className='faq' allowToggle allowMultiple>
            {faqsData.map((q) =>
            <AccordionItem>
                <AccordionHeader>
                    <div className='faq-question'>
                        <h2>{q.question}</h2>
                        <FaqPlus/>
                    </div>
                </AccordionHeader>
                <AccordionPanel pb={4}>{q.answer}</AccordionPanel>
            </AccordionItem>)}
        </Accordion>    
        </div>   
    )
};

export default Faq;