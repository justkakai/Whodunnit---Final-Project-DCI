import { createContext, useState, useEffect, useContext } from "react";
import { useLocation } from 'react-router-dom';
import { IntroPageContext} from "../contexts/IntroPageContext.js" ;
import containerVariants from "../functions/containerVariants.js"
import { motion } from "framer-motion";
// import { IntroPageContext } from "../contexts/IntroPageContext";
// import ClownImageContainer from '/IntroPageComponents/ClownImage';

import PoliceContainer from "../components/GameRoutes/PoliceCallPageComponents/PoliceContainer"
import DetectiveContainer from "../components/GameRoutes/PoliceCallPageComponents/DetectiveContainer"

// import ClownImageContainer from '.././components/GameRoutes/IntroPageComponents/ClownImage';
// import IntroTextContainer from '.././components/GameRoutes/IntroPageComponents/IntroText';

function PoliceFirstConversation() {

    const location = useLocation();


const { playerName } = useContext(IntroPageContext);
// const [policeWords, setPoliceWords] = useState(location.pathname === "/police-first-conversation" ? `a` : "null");
// const [policeWords, setPoliceWords] = useState("heee")
const { containerVariants } = useContext(IntroPageContext);


return (
    <motion.section className='police-page'
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
    <PoliceContainer />
            <DetectiveContainer />

    </motion.section>

)}

export default PoliceFirstConversation;