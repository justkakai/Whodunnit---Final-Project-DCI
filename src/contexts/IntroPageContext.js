import { createContext, useState } from "react";

const IntroPageContext = createContext(0);

function IntroPageProvider({ children }) {

    const textToDisplay = [
        "The ultimate murder mystery game!",
        "Let's start with your name, shall we?"
    ];

    const [displayedText, setDisplayedText] = useState(textToDisplay[0]);
    const [displayNameInput, setDisplayNameInput] = useState(false);
    const [playerName, setPlayerName] = useState("");
    const [displayInputAndButton, setDisplayInputAndButton] = useState(true);

    setTimeout(() => {
        setDisplayedText(textToDisplay[1]);
        setDisplayNameInput(true);
    }, 2000);

    return (
        <IntroPageContext.Provider value={{ displayedText, setDisplayedText, displayNameInput, setDisplayNameInput, playerName, setPlayerName, displayInputAndButton, setDisplayInputAndButton, textToDisplay }}>
            {children}
        </IntroPageContext.Provider>
    );
}

export { IntroPageContext, IntroPageProvider };