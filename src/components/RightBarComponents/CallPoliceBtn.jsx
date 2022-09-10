import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import callPolice from '../../images/callPolice.svg';

function CallPoliceBtn() {

    const containerVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: { delay: 0, duration: 0.7 }
        }
    }

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