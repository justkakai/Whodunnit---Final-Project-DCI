import { motion } from "framer-motion";
import InvoiceContainer from "./EvidencePageComponents/Invoice";
import BuffyLetterContainer from "./EvidencePageComponents/BuffyLetter";
import LaurenceContainer from "./EvidencePageComponents/Laurence";
import CocaineContainer from "./EvidencePageComponents/CocaineBag";
import EvidenceModal from "./EvidencePageComponents/EvidenceModal";

function EvidencePage() {

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
        <motion.section className='evidence-page'
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className="evidence-page-container">
                <InvoiceContainer />
                <BuffyLetterContainer />
                <LaurenceContainer />
                <CocaineContainer />
                <EvidenceModal />
            </div>
        </motion.section>
    )
}

export default EvidencePage;