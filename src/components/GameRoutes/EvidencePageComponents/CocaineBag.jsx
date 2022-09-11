import { useContext } from "react";
import { EvidencePageContext } from "../../../contexts/EvidenceContext";
import { BsArrowUpRight } from 'react-icons/bs';
import cocaine from '../../../images/cocaine.jpg';

function CocaineContainer() {

    const { setDisplayEvidenceExpanded } = useContext(EvidencePageContext);

    return (
        <div>
            <img src={cocaine} alt="A bag of cocaine" />
            <p>
                <button onClick={() => setDisplayEvidenceExpanded(true)}>
                    <span>Expand</span>
                    <BsArrowUpRight style={{ fontSize: "1.45em", color: "white" }} />
                </button>
            </p>
        </div>
    )
}

export default CocaineContainer;