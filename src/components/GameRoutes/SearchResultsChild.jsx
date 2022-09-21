import { keyboard } from "@testing-library/user-event/dist/keyboard";
import { useContext, useState, useEffect } from "react";
import { SearchSectionContext } from "../../contexts/SearchSectionContext";
import { useNavigate } from "react-router-dom";

function SearchResultsChild() {
  // const { characterName, characterAdress, website } = useContext(SearchSectionContext);
  const { searchTermFinal, setSearchTermFinal, setDisplaySearchResults, basicSearchValues} = useContext(SearchSectionContext); //searchTerm context variable
  const [characterName, setCharacterName] = useState("");
  const [characterAdress, setCharacterAdress] = useState("");
  const [website, setWebsite] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    basicSearchValues.map((indexNumber) => {
      if (indexNumber.name === searchTermFinal || searchTermFinal.includes(indexNumber.street)) {
        // const valuesInfo = Object.values(basicSearchValues[indexNumber.id -1]);
        setCharacterName(basicSearchValues[indexNumber.id - 1].name);
        setCharacterAdress(basicSearchValues[indexNumber.id - 1].address);
        setWebsite(basicSearchValues[indexNumber.id - 1].website);
        // setTimeout(() => {
        //     setCharacterName("")
        //   }, 100);    
          }
      else {setSearchTermFinal("jj")} // here!
    });
  }, [searchTermFinal]);

  function goInterrogate() {
    navigate("/interrogation");
    setDisplaySearchResults(false);
  }

  return (
    <>
      {characterName === "" ?
        <h1>Your search has yielded zero(0) results</h1>
        :
        <div>
          <h1>Your search has yielded one(1) result</h1>
          <br />
          <div>Name: {characterName}</div>
          <div>Adress: {characterAdress}</div>
          {website !== "" ? <div>Website: <a href="{website}" target="_blank">{website}</a></div> : null}
          <br />
          {characterAdress !== "unknown" ? <button onClick={() => goInterrogate()}>Visit address</button> : null}
        </div>}
    </>
  );
}
export default SearchResultsChild;


