import { createContext, useState } from "react";

const SearchSectionContext = createContext(0);

function SearchSectionProvider({ children }) {

    const [searchTerm, setSearchTerm] = useState("");
    const [searchTermFinal, setSearchTermFinal] = useState("");
    const [displaySearchResults, setDisplaySearchResults] = useState(false);

    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            setSearchTermFinal(searchTerm);
            setSearchTerm("");
            setDisplaySearchResults(true);
        }
    }

    return (
        <SearchSectionContext.Provider value={{ searchTerm, setSearchTerm, displaySearchResults, setDisplaySearchResults, handleKeyDown, searchTermFinal, setSearchTermFinal }}>
            {children}
        </SearchSectionContext.Provider>
    );
}

export { SearchSectionContext, SearchSectionProvider };









