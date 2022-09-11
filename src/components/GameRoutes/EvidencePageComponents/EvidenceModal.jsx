import { useContext } from "react";
import { EvidencePageContext } from "../../../contexts/EvidenceContext";
import closeModalX from '../../../images/close-modal-x.svg';

function EvidenceModal() {

    const { displayEvidenceExpanded, setDisplayEvidenceExpanded } = useContext(EvidencePageContext);

    return (
        <>
            {displayEvidenceExpanded ?
                <section className="evidence-expanded-box">
                    <div className="close-button-container" onClick={() => setDisplayEvidenceExpanded(false)}>
                        <img src={closeModalX} alt="close modal x button" />
                    </div>
                </section>
                :
                null}
        </>
    )
}

export default EvidenceModal;