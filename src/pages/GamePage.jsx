import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import GameTile from "./home-components/GameTile";

function GamePage() {
	const { id, title } = useParams();
	const [product, setProduct] = useState([]);
	const [loading, setLoading] = useState(false);

	React.useEffect(() => {
		fetch(`https://64519bece1f6f1bb22b3bd5e.mockapi.io/games`)
			.then((res) => res.json())
			.then((arr) => {
				setProduct(arr);
			});
	}, []);


	const productex = product.map((obj) => (
		<GameTile
			id={obj.id}
			title={obj.title}
			adv={obj.adv}
			downloads={obj.downloads}
			rating={obj.rating}
			imageURL={obj.imageUrl}
			categorie={obj.categorie}
		/>
	))

	const Loading = () => {
		return <>Loading...</>;
	};

	const ShowProduct = (product) => {
		return (
			<>
				<div class="content">
					<div class="slider-section">
						<div class="promo">
							<div class="back-shadow"></div>
							<div class="wrapper">
								<input type="radio" name="point" id="slide1" checked />
								<input type="radio" name="point" id="slide2" />
								<input type="radio" name="point" id="slide3" />
								<input type="radio" name="point" id="slide4" />
								<input type="radio" name="point" id="slide5" />
								<div class="slider">
									<div class="slides slide1">
										<img
											src={`${process.env.PUBLIC_URL}/${product.slide1}`}
											alt=""
										/>
									</div>
									<div class="slides slide2">
										<video
											height="487px"
											width="867px"
											autoplay
											loop
											playsinline
											muted
										>
											<source src="movie480_vp9.webm" />
										</video>
									</div>
									<div class="slides slide3">
										<img
											src="dota2slide3.jpg"
											width="867px"
											height="487px"
											href="#"
										/>
									</div>
									<div class="slides slide4">
										<img
											src="dota2slide4.jpg"
											width="867px"
											height="487px"
											href="#"
										/>
									</div>
									<div class="slides slide5">
										<img
											src="dota2slide5.jpg"
											width="867px"
											height="487px"
											href="#"
										/>
									</div>
								</div>
								<div class="controls">
									<label for="slide1"></label>
									<label for="slide2"></label>
									<label for="slide3"></label>
									<label for="slide4"></label>
									<label for="slide5"></label>
								</div>
							</div>
						</div>
						<div class="game-info">
							<div class="game-description">
								<h1>{product.title}</h1>
								<br />
								<h2>
									Every day, millions of players worldwide enter battle as one
									of over a hundred Dota heroes. And no matter if it's their
									10th hour of play or 1,000th, there's always something new to
									discover. With regular updates that ensure a constant
									evolution of gameplay, features, and heroes, Dota 2 has taken
									on a life of its own
								</h2>
							</div>
							<div class="game-characteristics">
								<div class="title1">
									<h2>RECENT REVIEWS:</h2>
								</div>
								<div class="title2">
									<h2>ALL REVIEWS:</h2>
								</div>
								<br />
								<div class="title3">
									<h2>RELEASE DATE:</h2>
								</div>
								<br />
								<div class="title4">
									<h2>DEVELOPER:</h2>
								</div>
								<div class="title5">
									<h2>PUBLUSHER:</h2>
								</div>

								<div class="info1">
									<h3>Mostly Positive (20.708)</h3>
								</div>
								<div class="info2">
									<h3>Very Positive (1.722.862)</h3>
								</div>
								<br />
								<div class="info3">
									<h3>9, Jul 2013</h3>
								</div>
								<br />
								<div class="info4">
									<h3>Valve</h3>
								</div>
								<div class="info5">
									<h3>Valve</h3>
								</div>
							</div>
						</div>
					</div>
					<div class="download">
						<h1>Play Dota 2</h1>
						<div class="download-button">
							<img src="windows.png" width="30px" height="30px" />
							<img src="apple.png" width="30px" height="30px" />
							<button>Play Now</button>
						</div>
					</div>
					<div class="system-reqirements">
						<h4>System Reqirements</h4>
						<div class="operating-systems">
							<div class="systems-block"></div>
							<div class="characteristics-block">
								<h5 class="os">OS:</h5>
								<h5 class="proccessor">Proccessor:</h5>
								<h5 class="memory">Memory:</h5>
								<h5 class="grapics">Graphics:</h5>
								<h5 class="network">Network:</h5>
								<h5 class="storage">Storage:</h5>

								<h6>Windows 7 or newer</h6>
								<h6>Dual core from Intel or AMD at 2.8 GHz</h6>
								<h6>4 GB RAM</h6>
								<h6>NVIDIA GeForce 8600/9600GT, ATI/AMD Radeon HD2600/3600</h6>
								<h6>Broadband Internet connection</h6>
								<h6>Broadband Internet connection</h6>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	};

	return (
		<div>
			<h1>Welcome to Game {id} page!!!</h1>
			<div className="container">
				<div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
			</div>
		</div>
	);
}

export default GamePage;
