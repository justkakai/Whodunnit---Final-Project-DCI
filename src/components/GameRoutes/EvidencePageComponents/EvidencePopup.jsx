import { useContext } from "react";
import { EvidencePageContext } from "../../../contexts/EvidenceContext";
import closeModalX from '../../../images/close-modal-x.svg';

function EvidencePopup() {

    const { displayEvidencePopup, setDisplayEvidencePopup, activeImage } = useContext(EvidencePageContext);

    return (
        <>
            {displayEvidencePopup ?
                <section className="evidence-expanded-box">
                    <div className="close-button-container" onClick={() => setDisplayEvidencePopup(false)}>
                        <img src={closeModalX} alt="close modal x button" />
                    </div>
                    <div className="evidence-popup-img-container">
                        <img src={activeImage} alt="evidence piece enlargened" />
                    </div>
                </section>
                :
                null}
        </>
    )
}

export default EvidencePopup;