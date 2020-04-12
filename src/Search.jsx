import React from 'react';

const Search = ({ onSearch }) => (
	<div className="pa2">
		<input
			className="pa3 ba b--green bg-lightest-blue"
			type="search"
			placeholder="Search robots"
			onChange={onSearch}
		/>
	</div>
);

export default Search;
