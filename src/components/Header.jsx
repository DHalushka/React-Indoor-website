import React, { useContext } from "react";
import logo from "../LOGO.svg";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { AuthContext } from "../context/AuthContext";

function Header() {
	const { currentUser } = useContext(AuthContext);
	const headerUser = () => {
		if (!currentUser) {
			return (
				<div className="header-user">
					<Link to="/login">
						<button>Log In</button>
					</Link>
				</div>
			);
		} else
			return (
				<div className="header-user">
					<div className="user">
						<h3>Welcome, </h3>
						<span>{currentUser.displayName}</span>
						<button onClick={() => signOut(auth)}>Log Out</button>
					</div>
				</div>
			);
	};

	return (
		<header>
			<Link to="/">
				<img alt="logo" src={logo}></img>
			</Link>
			<div className="header-right">
				{headerUser()}
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
