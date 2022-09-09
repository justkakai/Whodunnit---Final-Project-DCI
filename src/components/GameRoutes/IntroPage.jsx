import { motion } from "framer-motion";
import ClownImageContainer from './IntroPageComponents/ClownImage';
import IntroTextContainer from './IntroPageComponents/IntroText';

function IntroPage() {

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