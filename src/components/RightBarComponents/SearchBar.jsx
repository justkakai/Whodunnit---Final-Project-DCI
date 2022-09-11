import searchAnything from '../../images/searchAnything.svg';

function SearchBar() {

    return (
        <>
            <button className="search-btn">
                <img src={searchAnything} alt="Search button" />
            </button>
            {/* <input className="search-btn" type="text" placeholder="Search for anything!" /> */}
        </>
    )
}

export default SearchBar;



