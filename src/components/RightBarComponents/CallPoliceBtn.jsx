import { motion } from "framer-motion";
import { useContext } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { PoliceCallPageContext } from "../../contexts/PoliceCallPageContext";
import framerMotionVariants from "../../functions/containerVariants";
import callPolice from '../../images/callPolice.svg';

function CallPoliceBtn() {

    const { setPoliceWords, setDetectiveWords, setInteraction } = useContext(PoliceCallPageContext);

    const containerVariants = framerMotionVariants(0.8, 0.4, 0);

    let navigate = useNavigate();
    const location = useLocation();

    return (
        <motion.button className={location.pathname === "/call-police" ? "call-police-btn-active" : "call-police-btn"}
            onClick={() => {
                setInteraction(false);
                setDetectiveWords("");
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