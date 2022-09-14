import { createContext, useState, useContext } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { PoliceCallPageContext } from "./PoliceCallPageContext";

const BurgerMenuContext = createContext(0);

function BurgerMenuProvider({ children }) {

    let navigate = useNavigate();
    const location = useLocation();

    const { setPoliceWords, setDetectiveWords } = useContext(PoliceCallPageContext);

    const [displayBurgerDropdown, setDisplayBurgerDropdown] = useState(false);

    const burgerItemDetails = [
        { text: "Call Police", route: "/call-police", class: "burger-call-police" },
        { text: "View Police Report", route: "/police-report", class: "burger-police-report" },
        { text: "View Evidence", route: "/evidence", class: "burger-view-evidence" },
        { text: "Recorded Conversations", route: undefined, class: "burger-recorded-conversations" },
        { text: "Visited Addresses", route: undefined, class: "burger-visited-addresses" }
    ];

    function handleClick(route) {
        if (location.pathname === "/call-police") {
            setPoliceWords("How can I help you detective?");
            setDetectiveWords("");
        };
        navigate(route);
        setDisplayBurgerDropdown(false);
    };

    return (
        <BurgerMenuContext.Provider value={{ displayBurgerDropdown, setDisplayBurgerDropdown, burgerItemDetails, handleClick }}>
            {children}
        </BurgerMenuContext.Provider>
    );
}

export { BurgerMenuContext, BurgerMenuProvider };