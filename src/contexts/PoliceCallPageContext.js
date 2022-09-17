import { createContext, useState, useEffect, useContext } from "react";
import { useLocation } from 'react-router-dom';
import { IntroPageContext } from "./IntroPageContext";
import { triggerWords } from "../algo/Algo";

const PoliceCallPageContext = createContext(0);

function PoliceCallPageProvider({ children }) {

    const location = useLocation();

    const { playerName } = useContext(IntroPageContext);

    const init = JSON.parse(localStorage.getItem('policeWords'));

    const [policeWords, setPoliceWords] = useState(location.pathname === "/police-first-conversation" ? `aas` : "null");

    // const [policeWords, setPoliceWords] = useState(location.pathname === "/" ? `Hi there Detective ${playerName}! We've got quite the conundrum on our hands. Jimmy the clown has been found dead, and we are unable to solve his case. We were hoping you could help us.` : init);
    const [detectiveWords, setDetectiveWords] = useState("");

    useEffect(() => {
        localStorage.setItem('policeWords', JSON.stringify(policeWords));
    }, [policeWords]);

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            for (const object of triggerWords) {
                if (detectiveWords.toLowerCase().includes(object.question)) {
                    setPoliceWords(object.answer);
                };
            };
        };
    };

    return (
        <PoliceCallPageContext.Provider value={{ policeWords, setPoliceWords, detectiveWords, setDetectiveWords, handleKeyPress }}>
            {children}
        </PoliceCallPageContext.Provider>
    );
}

export { PoliceCallPageContext, PoliceCallPageProvider };