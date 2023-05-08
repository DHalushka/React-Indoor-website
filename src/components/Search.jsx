import React from "react";

function Search({searchValue, setSearchValue}) {
	return (
		<div className="search">
            <p className="icon">p</p>
			<input
                value={searchValue}
				id="search"
				type="search"
				placeholder="Search Game"
                onChange={(event)=>setSearchValue(event.target.value)}
			/>
			<button type="submit">Go</button>
		</div>
	);
}

export default Search;
