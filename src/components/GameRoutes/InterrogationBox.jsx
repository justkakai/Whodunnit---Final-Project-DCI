import React, { useState, useContext, useEffect  } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { dialogues } from './InterrogationBoxComponents/dialoguesData.js';
import { IntroPageContext } from '../../contexts/IntroPageContext.js';
import { SearchSectionContext } from '../../contexts/SearchSectionContext.js'

// Images
import detective from '../../images/detective.jpg';
// import laurence from '../../images/laurence2.png';
import harry from '../../images/harry.jpg';
// import buffy from '../../images/buffy2.jpg';
// import piotr from  '../../images/piotr.jpg';
// import iris from '../../images/iris.png';

// Speech Bubble
const Bubble = styled.div`
    display: inline-block;
    position: absolute;
    margin: 0 auto;
    max-width: 280px;
    padding: 10px 20px;
    border-radius: 10px;
    border: 3px solid black;
    background: white;
    font-size: 16px;
    text-align: left;
    letter-spacing: 0.5px;
    font-family: 'Covered By Your Grace', cursive;
    font-weight: bold;
    clear: both;
    z-index: 1;
    &:before {
     content: '';
     position: absolute;
     bottom: -50px;
     height: 50px;
     width: 90px;
    }
    // Left Bubble
    &.left {
        float: left;
        top: 5%;
        left: 40%; 
        &:before {
            border-radius: 0 0 100%;     
            box-shadow: 
            -2px -2px 0 0 #000 inset,
            -23px 0 0 0 #fff inset,
            -25px -2px 0 0 #000 inset;
            left: 0;
        }
    }
    // Right Bubble
    &.right {
        float: right;
        bottom: 25%;
        right: 40%;
        &:before {
            border-radius: 0 0 0 100%;     
            box-shadow: 
            2px -2px 0 0 #000 inset,
            23px 0 0 0 #fff inset,
            25px -2px 0 0 #000 inset;
            right: 0;
        }   
    }

    @media (min-width: 700px) {
        position: relative;
        max-width: 300px;
        line-height: 18px;

         &.left {
             margin: 10px 10px 50px 10px;
             top: auto;
             left: auto; 
         }

        &.right {
            margin: 10px 10px 50px 10px;
            bottom: auto;
            right: auto;
        }
    }

    @media (min-width: 1180px) {
            max-width: 350px;
    } 
`

function InterrogationBox() {
    const { containerVariants } = useContext(IntroPageContext);
    const { characterName } = useContext(SearchSectionContext);

    const [dialogueId, setDialogueId] = useState(); 
    const [imgLeftFrame, setImgLeftFrame] = useState('');
    const [imgRightFrame, setImgRightFrame] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0); 
    const [textArray, setTextArray] = useState([]); 
    const [isInterrogating, setIsInterrogating] = useState(false);

    useEffect(() => {
        setDialogueId(characterName);
        const theRightDialogue = dialogues.filter((e) => e.id === characterName);
        console.log(theRightDialogue);
        const leftImage = theRightDialogue[0].leftImg
        console.log('left', leftImage);
        setImgLeftFrame(leftImage);
        const rightImage = theRightDialogue[0].rightImg
        console.log('right', rightImage);
        setImgRightFrame(rightImage);
    }, [characterName]);

    const showDialogue = function(dialogueId) {
        // change button text
        setIsInterrogating(true);
        // get the right dialogue from data
        const dialogue = dialogues.filter((e) => e.id === dialogueId);
        /// filter method returns an array
        // acces texts inside dialogue
        const texts = dialogue[0].texts;
        // push text in currentIndex from texts to textArray
        setTextArray([...textArray, texts[currentIndex]]);
        // increment currentIndex valueß
        setCurrentIndex(currentIndex + 1);

         // on mobile, only show 2 bubbles
         // on desktop, show 4 bubbles
        if (window.innerWidth < 700 && textArray.length === 2) {
            setTextArray([texts[currentIndex]]); 
        } else if (window.innerWidth > 699 && textArray.length === 4) {
            setTextArray([texts[currentIndex]]); 
        }
       
        // reset button when dialogue ends
        if(currentIndex > texts.length - 1) {
            setTextArray([]);
            setCurrentIndex(0);
            setIsInterrogating(false);
        }
    }
    
    return ( 
        <motion.section className='interrogation-page'
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <div class="interrogation-top-bar">
                <div class="top-bar-content">INTERROGATION</div>
            </div>
            <section className='main-frames-conta'>
                <div className='dialogue-btn-conta'>
                    <button onClick={() => showDialogue(dialogueId)} className='start-btn'>
                        {isInterrogating ? 'Tap to Continue' : 'Start'}
                    </button>
                </div>
                <div className='frames-conta'>
                <div className='bubbles-conta'>
                        {
                            textArray.map((e, i) => {
                                if (i % 2 === 0) {
                                    return <Bubble className='left' key={i}>{e}</Bubble>
                                }
                                return <Bubble className='right' key={i}>{e}</Bubble>
                            })
                        }
                </div>
                    <div className='leftFrame' style={{backgroundImage: `url(${imgLeftFrame})`}}></div>
                    <div className='rightFrame' style={{backgroundImage: `url(${imgRightFrame})`}}></div>
                </div>
            </section>
        </motion.section>
     );
}

export default InterrogationBox;