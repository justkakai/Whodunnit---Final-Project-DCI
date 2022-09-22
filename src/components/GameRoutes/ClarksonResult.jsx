import { motion } from "framer-motion";
import { useContext } from "react";
import { IntroPageContext } from "../../contexts/IntroPageContext";
import DnaResultsPng from '../../images/dnaResult.png';

function ClarksonResult() {

    const { containerVariants } = useContext(IntroPageContext);

    return (
        <motion.section className='police-report-page'
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className="clarkson-results">
<div>
Detective, you won't believe what we have found in Ms Clarkson's e-mail account. 

She has booked a hotel in Brazil and we would love for you to go and check that out. 
</div>
<div>
<button>Go to hotel in South America</button>
</div>

            </div>
        </motion.section>
    )
}

export default ClarksonResult;