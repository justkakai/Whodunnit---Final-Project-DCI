import { useContext } from 'react';
import { PoliceCallPageContext } from '../../../contexts/PoliceCallPageContext';
import { SearchSectionContext } from '../../../contexts/SearchSectionContext';
import policeWoman from '../../../images/policeWoman.svg';
import { useNavigate } from "react-router-dom";

function PoliceContainer() {
  const {
    crowdMailWebsite,
    policeWords,
    detectiveWords,
    interaction,
    navigationInteraction,
    requestDnaResult,
    setShowDnaResult,
    setRequestDnaResult,
    showCrowdmail,
  } = useContext(PoliceCallPageContext);
  
  const {  basicSearchValues,  setCharacterName } = useContext(SearchSectionContext);
  
  let navigate = useNavigate();

  function goInterrogate() {
    const interrogationNames = basicSearchValues.map(e => e.name);
    if (interrogationNames.includes(detectiveWords)) {
        setCharacterName(detectiveWords);
        navigate("/interrogation");
    };
  };

  return (
    <div className="police-container">
      <div className="police-image-container">
        <img src={policeWoman} alt="Police woman" />
      </div>
      <div className="police-dialog-container">
        <div className="dialog-box-police">
          <p>{policeWords}</p>

          {interaction ? (
            <button onClick={() => goInterrogate()}>
              Contact
            </button>
          ) : null}

          {requestDnaResult ? (
            <button
            className='dnaRequestBtn'
              onClick={() => {
                setShowDnaResult(true);
                setRequestDnaResult(false);
              }}
            >
              Order DNA Test
            </button>
          ) : null}

          {showCrowdmail ? (
            <button>
              <a href={crowdMailWebsite} target="_blank">
                {" "}
                Visit Crowdmail
              </a>
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default PoliceContainer;
