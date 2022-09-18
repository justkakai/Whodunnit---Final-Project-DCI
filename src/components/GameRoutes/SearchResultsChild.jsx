import { useContext } from "react";
import { SearchSectionContext } from "../../contexts/SearchSectionContext";

function SearchResultsChild() {
  const { characterName, characterAdress, website } = useContext(SearchSectionContext);

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
          {characterAdress !== "unknown" ? <button>Visit address</button> : null}
        </div>}
    </>
  );
}
export default SearchResultsChild;


