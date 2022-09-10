import { motion } from "framer-motion";
import { BsArrowUpRight } from 'react-icons/bs';
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
                        <button>
                            <span>Expand</span>
                            <BsArrowUpRight style={{ fontSize: "1.45em", color: "white" }} />
                        </button>
                    </p>
                </div>
                <div>
                    <img src={buffyLetter} alt="Letter from Buffy" />
                    <p>
                        <button>
                            <span>Expand</span>
                            <BsArrowUpRight style={{ fontSize: "1.45em", color: "white" }} />
                        </button>
                    </p>
                </div>
                <div>
                    <img src={laurence} alt="Laurence the clown-hating religious guy" />
                    <p>
                        <button>
                            <span>Expand</span>
                            <BsArrowUpRight style={{ fontSize: "1.45em", color: "white" }} />
                        </button>
                    </p>
                </div>
                <div>
                    <img src={cocaine} alt="A bag of cocaine" />
                    <p>
                        <button>
                            <span>Expand</span>
                            <BsArrowUpRight style={{ fontSize: "1.45em", color: "white" }} />
                        </button>
                    </p>
                </div>
            </div>
        </motion.section>
    )
}

export default EvidencePage;