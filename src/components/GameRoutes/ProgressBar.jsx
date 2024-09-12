import { useState} from 'react';
import { useNavigate } from 'react-router-dom';

function ProgressBar(props) {
    const navigate = useNavigate();
    const [showBar ,setShowBar]=useState(true);

    setTimeout(() => {
        setShowBar(false);
    }, 10000)

    return (
        <section className="top-bar">
            {showBar ?
                <div className="dna-analysis-progress-bar"></div>
                :
                <button className="dna-analysis-ready-container" onClick={() => navigate(props.redirectUrl)}>{props.text}</button>
            }
        </section>
    )
}

export default ProgressBar;