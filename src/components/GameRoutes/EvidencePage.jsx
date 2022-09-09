import { motion } from "framer-motion";
/* import reportItself from '../../images/reportItself.png'; */
import neesonInvoice from '../../images/neesonInvoice.jpg';
import buffyLetter from '../../images/buffyLetter.jpg';
import laurence from '../../images/laurence.jpg';
import cocaine from '../../images/cocaine.jpg';

function EvidencePage() {

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
        <motion.section className='evidence-page'
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className="evidence-page-container">
                <div>
                    <img src={neesonInvoice} alt="Harry Neeson Invoice" />
                </div>
                <div>
                    <img src={buffyLetter} alt="Letter from Buffy" />
                </div>
                <div>
                    <img src={laurence} alt="Laurence the clown-hating religious guy" />
                </div>
                <div>
                    <img src={cocaine} alt="A bag of cocaine" />
                </div>
            </div>
        </motion.section>
    )
}

export default EvidencePage;