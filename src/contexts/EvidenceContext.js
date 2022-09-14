import { createContext, useState } from "react";

const EvidencePageContext = createContext(0);

function EvidencePageProvider({ children }) {

    const [displayEvidencePopup, setDisplayEvidencePopup] = useState(false);
    const [activeImage, setActiveImage] = useState("");

    return (
        <EvidencePageContext.Provider value={{ displayEvidencePopup, setDisplayEvidencePopup, activeImage, setActiveImage }}>
            {children}
        </EvidencePageContext.Provider>
    );
}

export { EvidencePageContext, EvidencePageProvider };