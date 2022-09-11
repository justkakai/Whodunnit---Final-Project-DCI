import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import framerMotionVariants from "../functions/containerVariants";

const IntroPageContext = createContext(0);

function IntroPageProvider({ children }) {

    let navigate = useNavigate();

    const containerVariants = framerMotionVariants(0, 0.5, -100);

    const textToDisplay = [
        "The ultimate murder mystery game!",
        "Let's start with your name, shall we?"
    ];

    const [showCallPoliceBtn, setShowCallPoliceBtn] = useState(false);
    const [displayedText, setDisplayedText] = useState(textToDisplay[0]);
    const [displayNameInput, setDisplayNameInput] = useState(false);
    const [playerName, setPlayerName] = useState("");
    const [displayInputAndButton, setDisplayInputAndButton] = useState(true);

    setTimeout(() => {
        setDisplayedText(textToDisplay[1]);
        setDisplayNameInput(true);
    }, 2000);

    const handleClick = () => {
        setShowCallPoliceBtn(true);
        setDisplayInputAndButton(false);
        setTimeout(() => {
            navigate("/call-police");
        }, 2000);
    };

    return (
        <IntroPageContext.Provider value={{ containerVariants, showCallPoliceBtn, setShowCallPoliceBtn, displayedText, setDisplayedText, displayNameInput, setDisplayNameInput, playerName, setPlayerName, displayInputAndButton, setDisplayInputAndButton, textToDisplay, handleClick }}>
            {children}
        </IntroPageContext.Provider>
    );
}

export { IntroPageContext, IntroPageProvider };