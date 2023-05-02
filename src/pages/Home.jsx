import React from "react";
import CategorieTile from "./home-components/CategorieTile";
import GameTile from "./home-components/GameTile";
import PromoTile from "./home-components/PromoTile";
import ReleaseTile from "./home-components/ReleaseTile";

function Home() {
	return (
		<main className="content">
			<div className="page-body">
				<div className="news-wrapper">
					<div className="promo-section">
						<PromoTile/>
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
						<div className="categories-items">
							<CategorieTile categorie="Adventure"/>
							<CategorieTile categorie="Puzzels"/>
							<CategorieTile categorie="Arcade"/>
							<CategorieTile categorie="Sports"/>
						</div>
					</div>
					<div className="games-section">
						<GameTile
							title="Dota 2"
							adv="Popular"
							downloads="30.1k"
							rating="4.3"
							image="dota2.jpg"
						/>
						<GameTile
							title="Sea of Thieves"
							adv="New"
							downloads="50.4k"
							rating="4.3"
							image="seaoftheves.jpg"
						/>
						<GameTile
							title="Minecraft"
							adv="Popular"
							downloads="50k"
							rating="4.7"
							image="minecrafr.webp"
						/>
						<GameTile
							title="PUBG"
							adv="Challange"
							downloads="30.2k"
							rating="4.3"
							image="pubg.jpg"
						/>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Home;
