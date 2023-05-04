import React, { useState } from "react";
import { useParams } from "react-router-dom";

function GamePage(props) {
	let {
		title,
		downloads,
		rating,
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
		slide3,
	} = props;
	const { id } = useParams();
	const [product, setProduct] = useState([]);
	const [loading, setLoading] = useState(true);

	React.useEffect(() => {
		fetch(`https://64519bece1f6f1bb22b3bd5e.mockapi.io/games`)
			.then((res) => res.json())
			.then((arr) => {
				setProduct(arr);
				setLoading(false);
			});
	}, []);
	if (product.length !== 0) {
		title = product[id].title;
		downloads = product[id].downloads;
		rating = product[id].rating;
		price = product[id].price;
		description = product[id].description;
		releaseDate = product[id].releaseDate;
		developer = product[id].developer;
		OS = product[id].OS;
		processor = product[id].processor;
		memory = product[id].memory;
		graphics = product[id].graphics;
		storage = product[id].storage;
		slide1 = product[id].slide1;
		slide2 = product[id].slide2;
		slide3 = product[id].slide3;
	}

	const Loading = () => {
		return <>Loading...</>;
	};

	const ShowProduct = (product) => {
		return (
			<div class="content">
				<div class="slider-section">
					<div className="slider">
						<figure>
							<img src={`${process.env.PUBLIC_URL}/${slide1}`} alt={title} />
							<img src={`${process.env.PUBLIC_URL}/${slide2}`} alt={title} />
							<img src={`${process.env.PUBLIC_URL}/${slide3}`} alt={title} />
							<img src={`${process.env.PUBLIC_URL}/${slide1}`} alt={title} />
						</figure>
					</div>
					<div class="game-info">
						<h1>{title}</h1>
						<br />
						<p className="game-info-description">{description}</p>
						<table>
							<tr>
								<td>
									<p className="game-info-table-title">RATING:</p>
								</td>
								<td>{rating}</td>
							</tr>
							<tr>
								<td>
									<p className="game-info-table-title">DOWNLOADS:</p>
								</td>
								<td>{downloads}K</td>
							</tr>
							<tr>
								<br />
							</tr>
							<tr>
								<td>
									<p className="game-info-table-title">RELEASE DATE:</p>
								</td>
								<td>{releaseDate}</td>
							</tr>
							<tr>
								<br />
							</tr>
							<tr>
								<td>
									<p className="game-info-table-title">DEVELOPER:</p>
								</td>
								<td>{developer}</td>
							</tr>
						</table>
					</div>
				</div>
				<div class="download">
					<h1>Play {title}</h1>
					<div class="download-button">
						<p>$500{price}</p>
						<button>Play Now</button>
					</div>
				</div>
				<div class="system-reqirements">
					System Reqirements
					<div class="characteristics-block">
						<table className="system-requirments">
							<tr>
								<td>OS:</td>
								<td>Proccessor:</td>
								<td>Memory:</td>
								<td>Graphics:</td>
								<td>Storage:</td>
							</tr>
							<tr>
								<td>{OS}</td>
								<td>{processor}</td>
								<td>{storage} GB RAM</td>
								<td>{graphics}</td>
								<td>{memory}i dont have it</td>
							</tr>
						</table>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className="game-page">{loading ? <Loading /> : <ShowProduct />}</div>
	);
}

export default GamePage;
