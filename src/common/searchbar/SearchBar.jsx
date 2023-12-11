import { Autocomplete, TextField } from '@mui/material';
import React from 'react';

import './SearchBar.css';

const SearchBar = ({ setFilter, data }) => {
	const search = e => {
		setFilter(e.target.value);
	}

	return (
		<Autocomplete
			disablePortal
			id="search"
			freeSolo
			disableClearable
			options={data}
			renderInput={(params) => {
				return <TextField onChange={search} {...params} type='search' label="Search Products" />
			}
			}
		/>
	)
}

export default SearchBar;