import { motion } from "framer-motion";
import PoliceContainer from "./PolicePageComponents/PoliceContainer";
import DetectiveContainer from "./PolicePageComponents/DetectiveContainer";

function PolicePage() {

    const containerVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: { delay: 0, duration: 0.5 }
        },
        exit: {
            x: "-100%",
            transition: { ease: "easeInOut" }
        }
    }

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