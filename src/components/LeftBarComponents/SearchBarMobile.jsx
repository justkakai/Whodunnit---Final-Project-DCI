import { useContext } from 'react';
import { SearchSectionContext } from '../../contexts/SearchSectionContext';

function SearchBarMobile() {

    const { searchTerm, setSearchTerm, handleKeyDown } = useContext(SearchSectionContext);

    return (
        <>
            <input className="search-bar-mobile" type="text" spellCheck="false" onChange={(e) => setSearchTerm(e.target.value)} onKeyDown={handleKeyDown} value={searchTerm} />
        </>
    )
}

export default SearchBarMobile;