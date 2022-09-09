import { motion } from "framer-motion";
import reportItself from '../../images/reportItself.png';

function PoliceReport() {

    const containerVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: { delay: 0, duration: 0.5 }
        },
    }

    return (
        <motion.section className='police-report-page'
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className="police-report-container">
                <img src={reportItself} alt="Police report" />
            </div>
        </motion.section>
    )
}

export default PoliceReport;