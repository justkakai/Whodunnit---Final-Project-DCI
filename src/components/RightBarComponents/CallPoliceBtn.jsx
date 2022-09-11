import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import framerMotionVariants from "../../functions/containerVariants";
import callPolice from '../../images/callPolice.svg';

function CallPoliceBtn() {

    const containerVariants = framerMotionVariants(0.7, 0);

    let navigate = useNavigate();

    return (
        <motion.button className="call-police-btn"
            onClick={() => { navigate("/call-police") }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <img src={callPolice} alt="Call the Police" />
        </motion.button>
    )
}

export default CallPoliceBtn;