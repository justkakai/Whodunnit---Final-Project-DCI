import { useState, useEffect, useContext } from 'react';
import { motion } from "framer-motion";
import { triggerWords } from '../../Algo/Algo';
import policeWoman from '../../images/policeWoman.svg';
import detective from '../../images/detective.svg';
import { IntroPageContext } from '../../contexts/IntroPageContext';

function PolicePage() {

    const containerVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: { delay: 0, duration: 0.5 }
        },
    }

    const { playerName } = useContext(IntroPageContext);

    const [policeWords, setPoliceWords] = useState("");
    const [detectiveWords, setDetectiveWords] = useState("");

    useEffect(() => {
        setPoliceWords(`Hello Detective ${playerName}! We've got quite the conundrum on our hands. Jimmy the clown has been found dead, and we are unable to solve his case. We were hoping you could help us.`)
    }, [playerName]);

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            for (const object of triggerWords) {
                if (detectiveWords.toLowerCase().includes(object.question)) {
                    setPoliceWords(object.answer);
                }
            }
        }
    };

    return (
        <motion.section className='police-page'
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className="police-container">
                <div className="police-image-container">
                    <img src={policeWoman} alt="Police woman" />
                </div>
                <div className="police-dialog-container">
                    <div className='dialog-box-police'>
                        <p>{policeWords}</p>
                    </div>
                </div>
            </div>

            <div className="detective-container">
                <div className="detective-dialog-container">
                    <div className='dialog-box-detective'>
                        <input type="text" onChange={(e) => setDetectiveWords(e.target.value)} onKeyDown={handleKeyPress} value={detectiveWords} />
                    </div>
                </div>
                <div className="detective-image-container">
                    <img src={detective} alt="Police woman" />
                </div>
            </div>
        </motion.section>
    )
}

export default PolicePage;