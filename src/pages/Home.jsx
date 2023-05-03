import React from "react";
import CategorieTile from "./home-components/CategorieTile";
import GameTile from "./home-components/GameTile";
import PromoTile from "./home-components/PromoTile";
import ReleaseTile from "./home-components/ReleaseTile";

function Home() {
	const [games, setGames] = React.useState([]);
	const [categorieId, setCategorieId] = React.useState(0);
	//const [sortType, setSortType] = React.useState(0);

	React.useEffect(() => {
		fetch(
			"https://64519bece1f6f1bb22b3bd5e.mockapi.io/games?categorie=" +
				categorieId
		)
			.then((res) => res.json())
			.then((arr) => {
				setGames(arr);
				//setIsLoading(false);
			});
	}, [categorieId]);

	return (
		<main className="content">
			<div className="page-body">
				<div className="news-wrapper">
					<div className="promo-section">
						<PromoTile />
					</div>
					<div className="releases-section">
						<h3>Latest releases</h3>
						<div className="releases-items">
							<ReleaseTile title="Anomaly" date="Feb 16" image="Anomaly.png" />
							<ReleaseTile
								title="CrazyBull"
								date="Feb 10"
								image="crazybull.png"
							/>
							<ReleaseTile
								title="Sky Bully"
								date="Jan 13"
								image="skybully.png"
							/>
							<ReleaseTile title="Anomaly" date="Feb 16" image="Anomaly.png" />
							<ReleaseTile
								title="CrazyBull"
								date="Feb 10"
								image="crazybull.png"
							/>
						</div>
					</div>
				</div>
				<div className="games-wrapper">
					<div className="categories-section">
						<h3>Categories</h3>
						<CategorieTile
							value={categorieId}
							onCategorieClick={(i) => setCategorieId(i)}
						/>
					</div>
					<div className="games-section">
						{games.map((obj) => (
							<GameTile
								id={obj.id}
								title={obj.title}
								adv={obj.adv}
								downloads={obj.downloads}
								rating={obj.rating}
								imageURL={obj.imageUrl}
								categorie={obj.categorie}
							/>
						))}
					</div>
				</div>
			</div>
		</main>
	);
}

export default Home;
