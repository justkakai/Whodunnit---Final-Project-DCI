import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { IntroPageContext } from '../../contexts/IntroPageContext.js';

function LandingPage() {
    const { containerVariants } = useContext(IntroPageContext);

    return ( 
        <motion.section className='landing-page'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        exit='exit'>  
            <h1>What next, Detective?</h1>
            <div className='wrapper'>
                <p>If you're not sure how to proceed, here are some guidelines that can help you find what you're looking for:</p>
                <ul>
                    <li>Read the police report</li>
                    <li>Go through all the evidence</li>
                    <li>
                        Use the call-police and search functions
                        <br />
                         to find more information
                        <br />
                        (Hint: type names with capitalization)
                    </li>
                    <li>Look for information externally</li>
                    <li>Pay attention to details</li>
                </ul>
            </div>
             
            <h2>🍀Good luck! </h2>
        </motion.section>
       
     );
}

export default LandingPage;