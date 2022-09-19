

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

  useEffect(() => {
    localStorage.setItem("policeWords", JSON.stringify(policeWords));
  }, [policeWords]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      for (const object of triggerWords) {
        if (detectiveWords.toLowerCase().includes(object.question)) {
          setPoliceWords(object.answer);
        }
      }
    }
  };

  return (
    <PoliceCallPageContext.Provider
      value={{
        policeWords,
        setPoliceWords,
        detectiveWords,
        setDetectiveWords,
        handleKeyPress,
        counterPoliceWords, 
        setCounterPoliceWords
      }}
    >
      {children}
    </PoliceCallPageContext.Provider>
  );
}

export { PoliceCallPageContext, PoliceCallPageProvider };
