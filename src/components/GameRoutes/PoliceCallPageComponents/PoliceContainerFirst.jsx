import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PoliceCallPageContext } from "../../../contexts/PoliceCallPageContext";
import policeWoman from "../../../images/policeWoman.svg";
import { IntroPageContext } from "../../../contexts/IntroPageContext";

function PoliceContainer() {
    let navigate = useNavigate();


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


  useEffect(() => {
    if (counterPoliceWords === 0) {
        setPoliceWords(`Hi there, Detective ${playerName}! We've got quite a conundrum on our hands. Jimmy the clown has been found dead, and we are unable to solve his case. We were hoping you could help us.`)
    }
    if (counterPoliceWords === 1) {
        setDetectiveWords(`You have come to the right one!`);
    }
    if (counterPoliceWords === 2) {
        setPoliceWords("Great! We are lucky! Also, we have prepared the police report for you to read. Don't forget to check out the evidence as well. Whenever you have questions you can call me.");
        setDetectiveWords("");    }
    if (counterPoliceWords === 3) {
        setDetectiveWords("Will do!");
    }
    if (counterPoliceWords >= 4) {
         navigate("/evidence");  }
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
          <p>{policeWords}</p>
        </div>
      </div>
    </div>
  );
}

export default PoliceContainer;
