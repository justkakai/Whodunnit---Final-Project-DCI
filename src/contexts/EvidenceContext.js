import { createContext, useState } from "react";

const EvidencePageContext = createContext(0);

function EvidencePageProvider({ children }) {

    const [displayEvidencePopup, setDisplayEvidencePopup] = useState(false);

    return (
        <EvidencePageContext.Provider value={{ displayEvidencePopup, setDisplayEvidencePopup }}>
            {children}
        </EvidencePageContext.Provider>
    );
}

export { EvidencePageContext, EvidencePageProvider };