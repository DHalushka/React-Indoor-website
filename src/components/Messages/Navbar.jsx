import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
	const { currentUser } = useContext(AuthContext);
	return (
		<div className="navbar">
			<img src="/logo.svg" alt="logo" height="33px"></img>
			<div className="user">
				<img src={currentUser.photoURL} alt=""></img>
				<span>{currentUser.displayName}</span>
				<button onClick={() => signOut(auth)}>Log Out</button>
			</div>
		</div>
	);
};

export default Navbar;
