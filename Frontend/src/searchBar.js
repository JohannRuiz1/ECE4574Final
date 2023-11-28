
import './searchBar.css';
const SearchBar = () => (

    <form action='/'method='get'>
        <label htmlFor='header-search'>
            <span className='visually-hidden'>Search Careers</span>
        </label>
        <input
            type="text"
            id= "header-search"
            className="large-search-bar"
            placeholder="Search Careers"
            name="s"
        />
        <button type="submit">Search</button>
    </form>
);
export default SearchBar;