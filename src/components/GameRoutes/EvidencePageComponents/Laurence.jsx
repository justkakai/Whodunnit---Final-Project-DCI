import { useContext } from "react";
import { EvidencePageContext } from "../../../contexts/EvidenceContext";
import { BsArrowUpRight } from 'react-icons/bs';
import laurence from '../../../images/laurence.jpg';

function LaurenceContainer() {

    const { setDisplayEvidencePopup } = useContext(EvidencePageContext);

    return (
        <div>
            <img src={laurence} alt="Laurence the clown-hating religious guy" />
            <p>
                <button onClick={() => setDisplayEvidencePopup(true)}>
                    <span>Expand</span>
                    <BsArrowUpRight style={{ fontSize: "1.45em", color: "white" }} />
                </button>
            </p>
        </div>
    )
}

export default LaurenceContainer;