import { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { PoliceCallPageContext } from '../../contexts/PoliceCallPageContext';
import { useNavigate } from "react-router-dom";


function TopBar() {

    const location = useLocation();

    const [displayDnaProgressBar, setDisplayDnaProgressBar] = useState(true);
    const { showDnaResult, showClarkson } = useContext(PoliceCallPageContext);

    let navigate = useNavigate();

    setTimeout(() => {
        setDisplayDnaProgressBar(false);
    }, 20200)

    return (
        <section className="top-bar">
            {showDnaResult ? 
                <>                     
                    {displayDnaProgressBar ?
                        <div className="dna-analysis-progress-bar"></div>
                        :
                        <button className="dna-analysis-ready-container" onClick={() => navigate("/dna-report")}>View DNA Results</button>
                    }
                </>
                :
                null
            }
              {showClarkson ? 
                <>                     
                    {displayDnaProgressBar ?
                        <div className="dna-analysis-progress-bar"></div>
                        :
                        <button className="dna-analysis-ready-container" onClick={() => navigate("/clarkson-result")}>Clarkson hacking result</button>
                    }
                </>
                :
                null
            }
        </section>
    )
}

export default TopBar;