
import './searchBar.css';
import React, {useEffect, useState} from 'react';

const SearchBar =  ({ value, onChange, onSubmit}) => (
//pass in the value we are changing, and the onChange/onSubmit function which is useTestSubmit
//is a form to preserve information submitted 
<div>
    <form onSubmit={onSubmit}> 
        <label htmlFor='header-search'>
            <span className='visually-hidden'>Search Careers</span>
        </label>
        <input
            type="text"
            id= "header-search"
            className="large-search-bar"
            placeholder="Search Careers"
            name="s"
            value={value}
            onChange={(e) => onChange(e.target.value)}
        /> 
    </form>
   
    </div>
);


export default SearchBar;

