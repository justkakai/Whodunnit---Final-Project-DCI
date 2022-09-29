import { useContext } from "react";
import { EvidencePageContext } from "../../../contexts/EvidenceContext";
import { BsArrowUpRight } from 'react-icons/bs';
import SuicideNotePic from '../../../images/suicideNote.jpeg'

function SuicideNote() {

    const { setDisplayEvidencePopup, setActiveImage } = useContext(EvidencePageContext);

    return (
        <div>
            <img src={SuicideNotePic} alt="Letter from Buffy" />
            <p>
                <button onClick={() => {
                    setDisplayEvidencePopup(true);
                    setActiveImage(SuicideNotePic);
                }
                }>
                    <span>Expand</span>
                    <BsArrowUpRight style={{ fontSize: "1.45em", color: "white" }} />
                </button>
            </p>
        </div >
    )
}

export default SuicideNote;