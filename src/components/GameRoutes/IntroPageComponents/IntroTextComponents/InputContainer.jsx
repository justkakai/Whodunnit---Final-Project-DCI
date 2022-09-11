import { motion } from "framer-motion";
import { useContext } from 'react';
import { IntroPageContext } from '../../../../contexts/IntroPageContext';
import framerMotionVariants from "../../../../functions/containerVariants";

function InputContainer() {

    const containerVariants = framerMotionVariants(0.6, 0.7, 0);

    const { playerName, setPlayerName, handleClick } = useContext(IntroPageContext);

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

