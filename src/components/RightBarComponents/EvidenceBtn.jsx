import { useNavigate, useLocation } from 'react-router-dom';
import viewEvidence from '../../images/viewEvidence.svg';

function EvidenceBtn() {

    const navigate = useNavigate();
    const location = useLocation();

    return (
        <button className={location.pathname === "/evidence" ? "view-evidence-btn-active" : "view-evidence-btn"} onClick={() => { navigate("/evidence") }}>
            <img src={viewEvidence} alt="View Evidence" />
        </button>
    )
}

export default EvidenceBtn;