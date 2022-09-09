import { useNavigate } from 'react-router-dom';
import viewEvidence from '../../images/viewEvidence.svg';

function EvidenceBtn() {

    let navigate = useNavigate();

    return (
        <button className="view-evidence-btn" onClick={() => { navigate("/evidence") }}>
            <img src={viewEvidence} alt="View Evidence" />
        </button>
    )
}

export default EvidenceBtn;