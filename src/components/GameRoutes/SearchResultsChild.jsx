import { useContext } from "react";
import { SearchSectionContext } from "../../contexts/SearchSectionContext";

// churchname return: website
// Harry Neeson  return address + other way around
// Buffy address -> returns her full name
// Bar 66 -> returns address
// Iris Brandson returns address and other way around - Oak Lane 2B, E-200 Swindon

const basicSearchValues = [
  {
    id: 1,
    name: "Laurence Vaulder",
    address: "unknown",
    website: "www.google.com",
  },
  {
    id: 2,
    name: "Harry Neeson",
    address: "Melwaukee Corner 4C, D3-111 Swindon",
  },
  {
    id: 3,
    name: "Buffy Silvara",
    address: "Trueman Boulevard 11c, 57-CD8 Swindon",
  },
  {
    id: 4,
    name: "Bar 66",
    address: "Sheffield-Road 179, 88-KD3 Swindon",
  },
  { id: 5, name: "Iris Brandson", address: "Oak Lane 2B, A2-Z89 Swindon" },
];

function SearchResultsChild() {
  const { searchTermFinal, searchTerm } = useContext(SearchSectionContext);

const obj = basicSearchValues.some(el => el.name = "Buffy Silvara")
console.log(basicSearchValues[0].name)

  return (
    <>
      {console.log("bro", searchTerm)}
      hello
      {searchTermFinal}
      {/* <div>
        {basicSearchValues.map((value) => {
          return (
            <div key={value.id}>
              <h2>{value.name}</h2>
            </div>
          );
        })}
      </div> */}
      <div>below: </div>
{obj}
    </>
  );
}
export default SearchResultsChild;
