import { motion } from "framer-motion";
import { useContext } from "react";
import { IntroPageContext } from "../../contexts/IntroPageContext";
import reportItself from '../../images/policeReport.pgng';

function PoliceReport() {

    const { containerVariants } = useContext(IntroPageContext);

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