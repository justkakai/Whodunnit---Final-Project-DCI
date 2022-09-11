import { motion } from "framer-motion";
import { useContext } from "react";
import { IntroPageContext } from "../../contexts/IntroPageContext";
import InvoiceContainer from "./EvidencePageComponents/Invoice";
import BuffyLetterContainer from "./EvidencePageComponents/BuffyLetter";
import LaurenceContainer from "./EvidencePageComponents/Laurence";
import CocaineContainer from "./EvidencePageComponents/CocaineBag";
import EvidenceModal from "./EvidencePageComponents/EvidenceModal";

function EvidencePage() {

    const { containerVariants } = useContext(IntroPageContext);
    
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