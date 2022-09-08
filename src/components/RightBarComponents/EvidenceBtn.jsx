import viewEvidence from '../../images/viewEvidence.svg';

function EvidenceBtn() {

    return (
        <button className="view-evidence-btn">
            <img src={viewEvidence} alt="View Evidence" />
        </button>
    )
}

export default EvidenceBtn;