import { useContext, useEffect } from "react";
import { PoliceCallPageContext } from "../../../contexts/PoliceCallPageContext";
import policeWoman from "../../../images/policeWoman.svg";
import { IntroPageContext } from "../../../contexts/IntroPageContext";

function PoliceContainer() {
    const { playerName, setPlayerName } = useContext(IntroPageContext);


  const {
    policeWords,
    setPoliceWords,
    counterPoliceWords,
    setCounterPoliceWords,
  } = useContext(PoliceCallPageContext);

  const { detectiveWords, setDetectiveWords, handleKeyPress } = useContext(
    PoliceCallPageContext
  );

setPlayerName("kkkk0000");

  useEffect(() => {
    if (counterPoliceWords === 1) {
        setDetectiveWords(`${playerName}`);
    }
    if (counterPoliceWords === 2) {
        setPoliceWords("133332");
        setDetectiveWords("");    }
    if (counterPoliceWords === 3) {
        setDetectiveWords("000");
    }
    if (counterPoliceWords === 4) {
        alert("jjj");
    }
  }, [counterPoliceWords]);

  useEffect(() => {
    const listener = (event) => {
      if (event.code === "Enter") {
        // console.log("Enter key was pressed. Run your function.");
        setCounterPoliceWords(counterPoliceWords + 1);
        event.preventDefault();
        // callMyFunction();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [[], counterPoliceWords]);

  return (
    <div className="police-container">
      <div className="police-image-container">
        <img src={policeWoman} alt="Police woman" />
      </div>
      <div className="police-dialog-container">
        <div className="dialog-box-police">
          <p>{policeWords} {playerName}</p>
        </div>
      </div>
    </div>
  );
}

export default PoliceContainer;
