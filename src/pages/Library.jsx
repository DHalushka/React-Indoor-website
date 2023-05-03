import React from "react";
import GameTile from "./home-components/GameTile";
import Search from "../Search";
import Pagination from "./Pagination";

function Library() {
	const [games, setGames] = React.useState([]);
	const [searchValue, setSearchValue] = React.useState("");
	const [currentPage, setCurrentPage] = React.useState(1);


	React.useEffect(() => {
		fetch(`https://64519bece1f6f1bb22b3bd5e.mockapi.io/games?page=${currentPage}&limit=12`)
			.then((res) => res.json())
			.then((arr) => {
				setGames(arr);
			});
	}, [currentPage]);

	const searchGames = games.filter(obj=>{
		if (obj.title.toUpperCase().includes(searchValue.toUpperCase())){
			return true;
		}
		return false;
	}).map((obj) => (<GameTile
		id={obj.id}
		title={obj.title}
		adv={obj.adv}
		downloads={obj.downloads}
		rating={obj.rating}
		imageURL={obj.imageUrl}
		categorie={obj.categorie}
	/>
))

	return (
		<div className="library-page">
			<Search searchValue={searchValue} setSearchValue={setSearchValue}/>
			<div className="library-games-section">
				{searchGames}
			</div>
			<Pagination onChangePage={number => setCurrentPage(number)}/>
		</div>
	);
}

export default Library;
