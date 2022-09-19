import { createContext, useState, useEffect } from "react";

const SearchSectionContext = createContext(0);

const basicSearchValues = [
    {
        id: 1,
        name: "Reverand Laurence",
        address: "unknown",
        organisationName: "",
        website: "www.jesus-hates-clowns.com",
    },
    {
        id: 2,
        name: "Harry Neeson",
        street: "Melwaukee Corner 4C",
        address: "Melwaukee Corner 4C, D3-111 Swindon",
        organisationName: "",
        website: "",
    },
    {
        id: 3,
        name: "Buffy Silvara",
        street: "Trueman Boulevard 11c",
        address: "Trueman Boulevard 11c, 57-CD8 Swindon",
        organisationName: "",
        website: "",
    },
    {
        id: 4,
        name: "Bar 66",
        street: "Sheffield-Road 179",
        address: "Sheffield-Road 179, 88-KD3 Swindon",
        organisationName: "",
        website: "",
    },
    {
        id: 5, name: "Iris Brandson", street: "Oak Lane 2B", address: "Oak Lane 2B, A2-Z89 Swindon", organisationName: "",
        website: ""
    },
];

function SearchSectionProvider({ children }) {

    const [searchTerm, setSearchTerm] = useState("");
    const [searchTermFinal, setSearchTermFinal] = useState("");
    const [displaySearchResults, setDisplaySearchResults] = useState(false);
    const [characterName, setCharacterName] = useState("");
    const [characterAdress, setCharacterAdress] = useState("");
    const [website, setWebsite] = useState("");

    useEffect(() => {
        basicSearchValues.map((item) => {
            if (item.name === searchTermFinal || searchTermFinal.includes(item.street)) {
                setCharacterName(item.name);
                setCharacterAdress(item.address);
                setWebsite(item.website);
            } /* else {
                setCharacterName("");
            } */
            return null;
        });
    }, [searchTermFinal]);

    /* useEffect(() => {
        for (const item of basicSearchValues) {
            if (item.name.toLowerCase() === searchTermFinal.toLowerCase() || searchTermFinal.toLowerCase().includes(item.street.toLowerCase())) {
                setCharacterName(item.name);
                setCharacterAdress(item.address);
                setWebsite(item.website);
            }
        }
    }, [searchTermFinal]); */

    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            setSearchTermFinal(searchTerm);
            setSearchTerm("");
            setDisplaySearchResults(true);
        }
    }

    return (
        <SearchSectionContext.Provider value={{ searchTerm, setSearchTerm, displaySearchResults, setDisplaySearchResults, searchTermFinal, setSearchTermFinal, characterName, setCharacterName, characterAdress, setCharacterAdress, website, setWebsite, handleKeyDown, basicSearchValues }}>
            {children}
        </SearchSectionContext.Provider>
    );
}

export { SearchSectionContext, SearchSectionProvider };









