import React from "react";

function ReleaseTile(props) {
	const { title, date, image } = props;
	return (
		<div class="releases-item">
			<div class="releases-game">
				<img
					src={`${process.env.PUBLIC_URL}/${image}`}
					width="45px"
					height="45px"
					alt="game-image"
				/>
				<div class="releases-info">
					<p class="releases-gamename">{title}</p>
					<p class="releases-gamedate">{date}</p>
				</div>
			</div>
			<div class="releases-button">
				<button>
					<span className="icon">u</span>
				</button>
			</div>
		</div>
	);
}

export default ReleaseTile;
