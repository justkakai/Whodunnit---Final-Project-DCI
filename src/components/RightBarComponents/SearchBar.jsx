import searchAnything from '../../images/searchAnything.png';

function SearchBar() {

    return (
        <>
            <button className="search-btn">
                <img src={searchAnything} alt="Search button" />
            </button>
            {/* <input className="search-bar" type="text" placeholder="Search for anything!" /> */}
        </>
    )
}

export default SearchBar;



