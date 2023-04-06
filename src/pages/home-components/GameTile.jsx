import React from "react";

function GameTile(props) {
	const { title, adv, downloads, rating, image } = props;
	return (
		<div class="game-tile">
			<img src={`${process.env.PUBLIC_URL}/${image}`} alt="game-image" />
			<p className="game-adv">{adv}</p>
			<div class="glass">
				<div className="glass-info">
					<a href="#">{title}</a>
					<p>
						<span class="icon">u</span>
						{downloads}
					</p>
					<p>
						<span class="icon star">i</span>
						{rating}
					</p>
				</div>
				<div>
					<button>Download</button>
				</div>
			</div>
		</div>
	);
}

export default GameTile;
