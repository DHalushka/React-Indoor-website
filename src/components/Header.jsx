import React from "react";
import logo from "../LOGO.svg";
import { Link } from "react-router-dom";

function Header() {

	return (
		<header>
			<Link to="/">
				<img alt="logo" src={logo}></img>
			</Link>
			<div className="header-right">
				
				<div className="cart">
					<Link to="/cart">
						<img alt="cart" src={`${process.env.PUBLIC_URL}/cart.png`}></img>
					</Link>
				</div>
			</div>
		</header>
	);
}

export default Header;
