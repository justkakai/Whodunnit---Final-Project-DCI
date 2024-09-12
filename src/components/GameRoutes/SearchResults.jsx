import { useContext } from 'react';
import { SearchSectionContext } from '../../contexts/SearchSectionContext';
import closeSectionX from '../../images/close-modal-x.svg';
import SearchResultsChild from './SearchResultsChild';

function SearchResultsContainer() {

    const { setDisplaySearchResults, displaySearchResults } = useContext(SearchSectionContext);

    return (
        <>
            {displaySearchResults ?
                <section className='search-results-container'>
                    <div className="close-button-container" onClick={() => setDisplaySearchResults(false)}>
                        <img src={closeSectionX} alt="close modal x button" />
                    </div>
                    <SearchResultsChild/>
                </section>
                :
                null
             }

        </>
    )
}
export default SearchResultsContainer;



     