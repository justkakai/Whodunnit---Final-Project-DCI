import { motion } from "framer-motion";
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { IntroPageContext } from '../../../../contexts/IntroPageContext';

function InputContainer() {

    const containerVariants = {
        hidden: {
            opacity: 0.6,
        },
        visible: {
            opacity: 1,
            transition: { delay: 0, duration: 0.7 }
        }
    }

    let navigate = useNavigate();

    const { setShowCallPoliceBtn, playerName, setPlayerName, setDisplayInputAndButton } = useContext(IntroPageContext);

    const handleClick = () => {
        setShowCallPoliceBtn(true);
        setDisplayInputAndButton(false);
        setTimeout(() => {
            navigate("/call-police");
        }, 2000);
    };

    return (
        <motion.div className='input-container'
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <input type="text" onChange={(e) => setPlayerName(e.target.value)} value={playerName} placeholder="Enter your name" />
            <button onClick={handleClick}>Start!</button>
        </motion.div>
    )
};

export default InputContainer;

