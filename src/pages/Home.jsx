import React from "react";
import GameTile from "./home-components/GameTile";

function Home() {
	return (
		<main className="content">
			<div className="page-body">
				<div className="news-wrapper">
					<div className="promo-section"></div>
					<div className="releases-section"></div>
				</div>
				<div className="games-wrapper">
					<div className="categories-section"></div>
					<div className="games-section">
							<GameTile />
							<GameTile />
							<GameTile />
							<GameTile />
					</div>
				</div>
			</div>
		</main>
	);
}

export default Home;
