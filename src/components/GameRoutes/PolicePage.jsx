import { motion } from "framer-motion";
import { useContext } from "react";
import { IntroPageContext } from "../../contexts/IntroPageContext";
import PoliceContainer from "./PolicePageComponents/PoliceContainer";
import DetectiveContainer from "./PolicePageComponents/DetectiveContainer";

function PolicePage() {

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
    )
}

export default PolicePage;