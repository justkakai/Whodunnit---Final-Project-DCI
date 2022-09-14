import { useContext } from 'react';
import { SearchSectionContext } from '../../contexts/SearchSectionContext';

function SearchBar() {

    const { searchTerm, setSearchTerm, handleKeyDown } = useContext(SearchSectionContext);

    return (
        <>
            <input className="search-btn" type="text" spellCheck="false" onChange={(e) => setSearchTerm(e.target.value)} onKeyDown={handleKeyDown} value={searchTerm} />
        </>
    )
}

export default SearchBar;



