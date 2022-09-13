import { useContext } from "react";
import { EvidencePageContext } from "../../../contexts/EvidenceContext";
import { BsArrowUpRight } from 'react-icons/bs';
import buffyLetter from '../../../images/buffyLetter.jpg';

function BuffyLetterContainer() {

    const { setDisplayEvidencePopup } = useContext(EvidencePageContext);

    return (
        <div>
            <img src={buffyLetter} alt="Letter from Buffy" />
            <p>
                <button onClick={() => setDisplayEvidencePopup(true)}>
                    <span>Expand</span>
                    <BsArrowUpRight style={{ fontSize: "1.45em", color: "white" }} />
                </button>
            </p>
        </div>
    )
}

export default BuffyLetterContainer;