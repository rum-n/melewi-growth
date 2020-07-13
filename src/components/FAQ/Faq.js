import React from 'react';
import './styles.css';
import { Accordion, AccordionItem, AccordionHeader, AccordionPanel, AccordionIcon } from "@chakra-ui/core";

const Faq = () => {
    return (
        <Accordion className='faq' allowToggle>
            <AccordionItem>
                <AccordionHeader>
                <h2>How would I know which plan is for me?</h2>
                </AccordionHeader>
                <AccordionPanel pb={4}>
                We'll help you choose!
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionHeader>
                <h2>What payment methods do you accept?</h2>
                </AccordionHeader>
                <AccordionPanel pb={4}>

                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionHeader>
                <h2>How much time does it take you to do a Keynote presentation?</h2>
                </AccordionHeader>
                <AccordionPanel pb={4}>
                    
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionHeader>
                <h2>What about a mobile app design?</h2>
                </AccordionHeader>
                <AccordionPanel pb={4}>
                    
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionHeader>
                <h2>How much does a design project usually cost?</h2>
                </AccordionHeader>
                <AccordionPanel pb={4}>
                    
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionHeader>
                <h2>I don't see a plan that suits me. Can we discuss a custom solution?</h2>
                </AccordionHeader>
                <AccordionPanel pb={4}>
                    
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionHeader>
                <h2>How can I cancel my subscription?</h2>
                </AccordionHeader>
                <AccordionPanel pb={4}>
                    
                </AccordionPanel>
            </AccordionItem>
        </Accordion>       
    )
};

export default Faq;