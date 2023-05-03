import React from "react";
import { NavLink } from "react-router-dom";

function GameTile(props) {
	const {
		id,
		title,
		adv,
		downloads,
		rating,
		imageURL,
		categorie,
		price,
		description,
		releaseDate,
		developer,
		OS,
		processor,
		memory,
		graphics,
		storage,
		slide1,
		slide2,
		slide3
	} = props;
	return (
		<div class="game-tile">
			<NavLink to={`/library/${id}`}>
				<img src={`${process.env.PUBLIC_URL}/${imageURL}`} alt="game-image" />
			</NavLink>
			<p className="game-adv">{adv}</p>
			<div class="glass">
				<div className="glass-info">
					<NavLink to={`/library/${id}`}>{title}</NavLink>
					<p>
						<span class="icon">u</span>
						{downloads}k
					</p>
					<p>
						<span class="icon star">i</span>
						{rating}
					</p>
				</div>
				<div>
					<NavLink to={`/library/${id}`}>
						<button>Download</button>
					</NavLink>
				</div>
			</div>
		</div>
	);
}

export default GameTile;
