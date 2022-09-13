import { createContext, useState, useEffect, useContext } from "react";
import { IntroPageContext } from "./IntroPageContext";
import { triggerWords } from "../algo/Algo";

const PoliceCallPageContext = createContext(0);

function PoliceCallPageProvider({ children }) {

    const { playerName } = useContext(IntroPageContext);

    const init = JSON.parse(localStorage.getItem('policeWords')) || `Hi there Detective ${playerName}! We've got quite the conundrum on our hands. Jimmy the clown has been found dead, and we are unable to solve his case. We were hoping you could help us.`

    const [policeWords, setPoliceWords] = useState(init);
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