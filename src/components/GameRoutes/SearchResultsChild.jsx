import { useContext, useState, useEffect } from "react";
import { SearchSectionContext } from "../../contexts/SearchSectionContext";

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

function SearchResultsChild() {
  const { searchTermFinal } = useContext(SearchSectionContext); //searchTerm context variable
  const [characterName, setCharacterName] = useState("");
  const [characterAdress, setCharacterAdress] = useState("");
  const [website, setWebsite] = useState("");

  useEffect(() => {
    basicSearchValues.map((indexNumber) => {
      if (indexNumber.name === searchTermFinal || searchTermFinal.includes(indexNumber.street)) {
        setCharacterName(basicSearchValues[indexNumber.id - 1].name);
        setCharacterAdress(basicSearchValues[indexNumber.id - 1].address);
        setWebsite(basicSearchValues[indexNumber.id - 1].website);
      }
      return null;
    });
  }, [searchTermFinal]);

  return (
    <>
      {characterName === "" ? <div>No Result</div> :
        <div>
          <h1>Search result:</h1>
          <br />
          <div>Name: {characterName}</div>
          <div>Adress: {characterAdress}</div>
          {website !== "" ? <div>Website: <a href="{website}" target="_blank">{website}</a></div> : null}
          <br />
          {characterAdress !== "unknown" ? <button>Visit address</button> : null}
        </div>}
    </>
  );
}
export default SearchResultsChild;
