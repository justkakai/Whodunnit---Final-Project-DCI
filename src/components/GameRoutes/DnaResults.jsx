import { motion } from "framer-motion";
import { useContext } from "react";
import { IntroPageContext } from "../../contexts/IntroPageContext";
import DnaResultsPng from '../../images/dnaResult.png';

function DnaResults() {

    const { containerVariants } = useContext(IntroPageContext);

    return (
        <motion.section className='police-report-page'
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className="police-report-container">
                <img src={DnaResultsPng} alt="DNA results" />
            </div>
        </motion.section>
    )
}

export default DnaResults;