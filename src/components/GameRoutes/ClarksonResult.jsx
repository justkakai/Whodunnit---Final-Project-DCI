import { motion } from "framer-motion";
import { useState, useContext } from "react";
import { IntroPageContext } from "../../contexts/IntroPageContext";
import { useNavigate } from "react-router-dom";
import planeImg from "../../images/plane.gif"
import JimmysReveal from "./JimmysReveal";

function ClarksonResult() {

    const { containerVariants } = useContext(IntroPageContext);
   const [show, setShow] = useState(false);
   let navigate = useNavigate();


const goToReveal = () => {
    setShow(true);
    setTimeout(() => {
        navigate("/jimmys-reveal");
        setShow(false);
    }, 4000);}

    return (
        <>
            { show === false ? 
                <motion.section className='clarksonresult-page'
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <div className="clarkson-results">
                        <div>
                        Detective, you won't believe what we have found in Ms   Clarkson's e-mail account. She has booked a hotel in Brazil   and we would love for you to go and check that out. 
                        </div>
                        <div>
                            <button onClick={() => goToReveal()}>Go to hotel in South America</button>
                        </div>
                    </div> 
                </motion.section> 
                : <img src={planeImg} />}
        </>
    )
}

export default ClarksonResult;