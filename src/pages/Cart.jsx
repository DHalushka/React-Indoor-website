import React from "react";
import GameTile from "./home-components/GameTile";

let imageURL = "pubg.jpg";
function Cart() {
	return (
		<div className="cart-page">
			<div className="cart-page-title">
				<h1>
					<img alt="cart" src={`${process.env.PUBLIC_URL}/cart.png`}></img> Your
					cart
				</h1>
			</div>
			<div className="cart-page-item">
				<div className="image">
					<img src={`${process.env.PUBLIC_URL}/${imageURL}`} alt="game-mage" />
                    <a href="#">PUBG</a>
				</div>
				<p className="cart-item-price">$19.99</p>
				<button className="cart-item-remove">x</button>
			</div>
			<button className="buy">Buy Now</button>
		</div>
	);
}

export default Cart;
