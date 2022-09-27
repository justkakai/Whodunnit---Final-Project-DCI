import { createContext, useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { IntroPageContext } from "./IntroPageContext";
import { triggerWords } from "../algo/Algo";

const PoliceCallPageContext = createContext(0);

function PoliceCallPageProvider({ children }) {
  const location = useLocation();

  const { playerName } = useContext(IntroPageContext);
  const [counterPoliceWords, setCounterPoliceWords] = useState(0);

  const init = JSON.parse(localStorage.getItem("policeWords"));

  const [policeWords, setPoliceWords] = useState("");
  const [detectiveWords, setDetectiveWords] = useState("");
  const [interaction, setInteraction] = useState(false);
  const [navigationInteraction, setNavigationInteraction] = useState("");
  const [requestDnaResult, setRequestDnaResult] = useState(false);
  const [showDnaResult, setShowDnaResult] = useState(false);
  const [showClarkson, setShowClarkson] = useState(false);
  const [showCrowdmail, setShowCrowdmail] = useState(false);
  const [crowdMailWebsite, setCrowdmailWebsite] = useState("");

  useEffect(() => {
    localStorage.setItem("policeWords", JSON.stringify(policeWords));
  }, [policeWords]);

  const handleKeyPress = (e) => {
    setInteraction(false);
    setRequestDnaResult(false);
    if (e.key === "Enter") {
      for (const object of triggerWords) {
        if (detectiveWords.toLowerCase().includes(object.question)) {
          setPoliceWords(object.answer);
          if (object.interaction === true) {
            setInteraction(true);
            setNavigationInteraction(object.navigation);
          }

          if (object.showDnaResult === true) {
            setRequestDnaResult(true);
          }
          if (object.showClarkson === true) {
            setShowClarkson(true);
          }
          if (object.showCrowdmail === true) {
            setShowCrowdmail(true);
            setCrowdmailWebsite(object.crowdmailAdress);
          }
        }
      }
    }
  };

  return (
    <PoliceCallPageContext.Provider
      value={{
        crowdMailWebsite,
        showCrowdmail,
        setShowCrowdmail,
        showClarkson,
        setShowClarkson,
        showDnaResult,
        setShowDnaResult,
        requestDnaResult,
        setRequestDnaResult,
        navigationInteraction,
        setInteraction,
        interaction,
        policeWords,
        setPoliceWords,
        detectiveWords,
        setDetectiveWords,
        handleKeyPress,
        counterPoliceWords,
        setCounterPoliceWords,
      }}
    >
      {children}
    </PoliceCallPageContext.Provider>
  );
}

export { PoliceCallPageContext, PoliceCallPageProvider };
