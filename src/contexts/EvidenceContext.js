import { createContext, useState } from "react";

const EvidencePageContext = createContext(0);

function EvidencePageProvider({ children }) {

    const [displayEvidenceExpanded, setDisplayEvidenceExpanded] = useState(false);

    return (
        <EvidencePageContext.Provider value={{ displayEvidenceExpanded, setDisplayEvidenceExpanded }}>
            {children}
        </EvidencePageContext.Provider>
    );
}

export { EvidencePageContext, EvidencePageProvider };