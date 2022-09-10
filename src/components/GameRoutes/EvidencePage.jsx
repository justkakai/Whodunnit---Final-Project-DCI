import { useState } from "react";
import { motion } from "framer-motion";
import { BsArrowUpRight } from 'react-icons/bs';
import closeModalX from '../../images/close-modal-x.svg';
import neesonInvoice from '../../images/neesonInvoice.jpg';
import buffyLetter from '../../images/buffyLetter.jpg';
import laurence from '../../images/laurence.jpg';
import cocaine from '../../images/cocaine.jpg';

function EvidencePage() {

    const [displayEvidenceExpanded, setDisplayEvidenceExpanded] = useState(false);

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
                <div>
                    <img src={neesonInvoice} alt="Harry Neeson Invoice" />
                    <p>
                        <button onClick={() => setDisplayEvidenceExpanded(true)}>
                            <span>Expand</span>
                            <BsArrowUpRight style={{ fontSize: "1.45em", color: "white" }} />
                        </button>
                    </p>
                </div>
                <div>
                    <img src={buffyLetter} alt="Letter from Buffy" />
                    <p>
                        <button onClick={() => setDisplayEvidenceExpanded(true)}>
                            <span>Expand</span>
                            <BsArrowUpRight style={{ fontSize: "1.45em", color: "white" }} />
                        </button>
                    </p>
                </div>
                <div>
                    <img src={laurence} alt="Laurence the clown-hating religious guy" />
                    <p>
                        <button onClick={() => setDisplayEvidenceExpanded(true)}>
                            <span>Expand</span>
                            <BsArrowUpRight style={{ fontSize: "1.45em", color: "white" }} />
                        </button>
                    </p>
                </div>
                <div>
                    <img src={cocaine} alt="A bag of cocaine" />
                    <p>
                        <button onClick={() => setDisplayEvidenceExpanded(true)}>
                            <span>Expand</span>
                            <BsArrowUpRight style={{ fontSize: "1.45em", color: "white" }} />
                        </button>
                    </p>
                </div>

                {displayEvidenceExpanded ?
                    <section className="evidence-expanded-box">
                        <div className="close-button-container" onClick={() => setDisplayEvidenceExpanded(false)}>
                            <img src={closeModalX} alt="close modal x button" />
                        </div>
                    </section>
                    :
                    null}

            </div>
        </motion.section>
    )
}

export default EvidencePage;