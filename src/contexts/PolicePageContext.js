import { createContext, useState, useEffect, useContext } from "react";
import { IntroPageContext } from "./IntroPageContext";
import { triggerWords } from "../algo/Algo";

const PolicePageContext = createContext(0);

function PolicePageProvider({ children }) {

    const { playerName } = useContext(IntroPageContext);

    const [policeWords, setPoliceWords] = useState("");
    const [detectiveWords, setDetectiveWords] = useState("");

    useEffect(() => {
        setPoliceWords(`Hello Detective ${playerName}! We've got quite the conundrum on our hands. Jimmy the clown has been found dead, and we are unable to solve his case. We were hoping you could help us.`)
    }, [playerName]);

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            for (const object of triggerWords) {
                if (detectiveWords.toLowerCase().includes(object.question)) {
                    setPoliceWords(object.answer);
                }
            }
        }
    };

    return (
        <PolicePageContext.Provider value={{ policeWords, setPoliceWords, detectiveWords, setDetectiveWords, handleKeyPress }}>
            {children}
        </PolicePageContext.Provider>
    );
}

export { PolicePageContext, PolicePageProvider };