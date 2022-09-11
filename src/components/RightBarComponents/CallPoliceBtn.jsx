import { motion } from "framer-motion";
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { PolicePageContext } from "../../contexts/PolicePageContext";
import framerMotionVariants from "../../functions/containerVariants";
import callPolice from '../../images/callPolice.svg';

function CallPoliceBtn() {

    const { setPoliceWords } = useContext(PolicePageContext);

    const containerVariants = framerMotionVariants(0.5, 0.7, 0);

    let navigate = useNavigate();

    return (
        <motion.button className="call-police-btn"
            onClick={() => {
                setPoliceWords("How can I help you detective?");
                navigate("/call-police");
            }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <img src={callPolice} alt="Call the Police" />
        </motion.button>
    )
}

export default CallPoliceBtn;