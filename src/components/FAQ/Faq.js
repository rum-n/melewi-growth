import React from 'react';
import './styles.css';
import faqsData from './faqsData';
import { Accordion, AccordionItem, AccordionHeader, AccordionPanel } from "@chakra-ui/core";

const Faq = () => {
    
    return (
        <Accordion className='faq' allowToggle allowMultiple>
            {faqsData.map((q) =>
            <AccordionItem>
                <AccordionHeader><h2>{q.question}</h2></AccordionHeader>
                <AccordionPanel pb={4}>{q.answer}</AccordionPanel>
            </AccordionItem>)}
        </Accordion>       
    )
};

export default Faq;