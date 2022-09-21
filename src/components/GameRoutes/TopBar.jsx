import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function TopBar() {

    const location = useLocation();

    const [displayDnaProgressBar, setDisplayDnaProgressBar] = useState(true);

    setTimeout(() => {
        setDisplayDnaProgressBar(false);
    }, 20200)

    return (
        <section className="top-bar">
            {(location.pathname === "/evidence") ? // !!!! this needs to be changed to a contextvariable
                <>                     
                    {displayDnaProgressBar ?
                        <div className="dna-analysis-progress-bar"></div>
                        :
                        <button className="dna-analysis-ready-container">View DNA Results</button>
                    }
                </>
                :
                null
            }
        </section>
    )
}

export default TopBar;