import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { dialogues } from './InterrogationBoxComponents/dialoguesData.js';
import { IntroPageContext } from '../../contexts/IntroPageContext.js';
import { SearchSectionContext } from '../../contexts/SearchSectionContext.js';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle, faTimes } from '@fortawesome/free-solid-svg-icons';

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
    const { characterName, visitedBuffy, setVisitedBuffy } = useContext(SearchSectionContext);

    const [dialogueId, setDialogueId] = useState(); 
    const [imgLeftFrame, setImgLeftFrame] = useState('');
    const [imgRightFrame, setImgRightFrame] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0); 
    const [textArray, setTextArray] = useState([]); 
    const [isInterrogating, setIsInterrogating] = useState(false);
    const [displayImage, setDisplayImage] = useState(false);
    const [displayScreenshots, setDisplayScreenshots] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        setDialogueId(characterName);
        // get the right dialogue object
        const theRightDialogue = dialogues.filter((e) => e.id === characterName);
        // set left and right images
        const leftImage = theRightDialogue[0].leftImg
        setImgLeftFrame(leftImage);
        const rightImage = theRightDialogue[0].rightImg
        setImgRightFrame(rightImage);
        // keep track on buffy's dialogue
        if (characterName === 'Buffy Silvara') {
            setVisitedBuffy(prevVisitedBuffy => !prevVisitedBuffy)
        }
    }, [characterName]);

    const showDialogue = function(dialogueId) {
        // change button text
        setIsInterrogating(true);
        // get the right dialogue from data
        const dialogue = dialogues.filter((e) => e.id === dialogueId);
        /// filter method returns an array
        // acces texts inside dialogue
        let texts = [];        
        if (dialogueId === 'Buffy Silvara' && visitedBuffy) {
           texts.push(dialogue[0].secondText);
        } else texts.push(dialogue[0].texts);
        // push text in currentIndex from texts to textArray
        setTextArray([...textArray, texts[0][currentIndex]]);
        // increment currentIndex value
        setCurrentIndex(currentIndex + 1);
         // on mobile, only show 2 bubbles
         // on desktop, show 4 bubbles
        if (window.innerWidth < 700 && textArray.length === 2) { 
            setTextArray([texts[0][currentIndex]]); 
        } else if (window.innerWidth > 699 && textArray.length === 4) {
            setTextArray([texts[0][currentIndex]]); 
        };
        // reset button when dialogue ends
         if (currentIndex > texts[0].length - 1) {
            setTextArray([]);
            setCurrentIndex(0);
            setIsInterrogating(false);
        };
    };

    const closeDialogue = function() {
        navigate("/landing-page");
    }; 

    const displayImg = function() {
        setDisplayImage(true);
        if (dialogueId === 'Harry Neeson') {
            setDisplayScreenshots(true);
        }
    }

    const closeImg = function() {
        setDisplayImage(false);
        setDisplayScreenshots(false);
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
                <button onClick={() => closeDialogue()} className='close-btn'>
                    <FontAwesomeIcon  icon={faXmarkCircle}  className='close-icon' />
                </button>
            </div>
            <section className='main-frames-conta'>
                <div className='dialogue-btn-conta'>
                    <button onClick={() => showDialogue(dialogueId)} className='start-btn'>
                        { isInterrogating ? 'Tap to Continue' : 'Start' }
                    </button>
                </div>
                <div className='frames-conta'>
                    <div className='bubbles-conta'>
                        {
                            textArray.map((e, i) => {
                                // Display Buffy's messages 
                                if (e === "Ugh! Here!") {
                                    return <Bubble className='right' key={i}>{e}
                                        <button onClick={() => displayImg()} className='displayImg-btn'>Show Messages</button>
                                    </Bubble>
                                }  
                                // Display encoded password on picture 
                                else if (e == "Let me take a picture of it really quick."){
                                   return <Bubble className='right' key={i}>{e}
                                       <button onClick={() => displayImg()} className='displayImg-btn'>Show Picture</button>
                                   </Bubble>
                                }
                                else if (i % 2 === 0) {
                                    return <Bubble className='left' key={i}>{e}</Bubble>
                                } else return <Bubble className='right' key={i}>{e}</Bubble>
                            })
                        }
                    </div>
                    {
                        displayImage &&
                        <div className='display-img-conta'>
                            <div className='overlay'></div>
                            <div className='img-conta'>
                                <button onClick={() => closeImg()}  className='close-img-btn'>
                                    <FontAwesomeIcon  icon={faTimes}  className='close-icon' />
                                </button>
                                { 
                                    displayScreenshots ?
                                    <img src="./images/screenshots_buffy.png" />
                                    :
                                    <img src="./images/numbers_photo.jpeg" />
                                 }
                            </div>  
                        </div>
                    }
                    <div className='leftFrame' style={{backgroundImage: `url(${imgLeftFrame})`}}></div>
                    <div className='rightFrame' style={{backgroundImage: `url(${imgRightFrame})`}}></div>
                </div>
            </section>
        </motion.section>
     );
}

export default InterrogationBox;