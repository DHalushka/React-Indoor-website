import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const LoginPage = () => {
	const [err, setErr] = useState(false);
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const email = e.target[0].value;
		const password = e.target[1].value;

		try {
			await signInWithEmailAndPassword(auth, email, password);
			navigate("/");
		} catch (err) {
			setErr(true);
		}
	};
	return (
		<div className="messages-page">
			<div className="formWrapper">
				<img src="/logo.svg" alt="logo"></img>
				<h2>Log In</h2>
				<form onSubmit={handleSubmit}>
					<input type="email" placeholder="email"></input>
					<input type="password" placeholder="password"></input>
					<button>Log In</button>
					{err && <span>Something went wrong</span>}
					<p>
						Dont have an account? <Link to="/register">Register</Link>
					</p>
				</form>
			</div>
		</div>
	);
};

export default LoginPage;
