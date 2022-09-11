import { motion } from "framer-motion";
import { useContext } from "react";
import { IntroPageContext } from "../../contexts/IntroPageContext";
import ClownImageContainer from './IntroPageComponents/ClownImage';
import IntroTextContainer from './IntroPageComponents/IntroText';

function IntroPage() {

    const { containerVariants } = useContext(IntroPageContext);

    return (
        <motion.section className='intro-page'
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <ClownImageContainer />
            <IntroTextContainer />
        </motion.section>
    )
}

export default IntroPage;