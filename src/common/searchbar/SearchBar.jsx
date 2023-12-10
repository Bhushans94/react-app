import React from 'react';

const SearchBar = ({ setFilter, data }) => {
    const search = e => {
        setFilter(e.target.value);
    }

    return (
        <input type="search" onChange={search} placeholder="Search Products" className="mds-search-input" />
    )
}

export default SearchBar;