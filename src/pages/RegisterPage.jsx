import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

const RegisterPage = () => {
	const [err, setErr] = useState(false);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const handleSubmit = async (e) => {
		e.preventDefault();
		const displayName = e.target[0].value;
		const email = e.target[1].value;
		const password = e.target[2].value;
		const file = e.target[3].files[0];
		try {
			const res = await createUserWithEmailAndPassword(auth, email, password);
			const storageRef = ref(storage, displayName);
			const uploadTask = uploadBytesResumable(storageRef, file);

			/*uploadTask.on(
				(error) => {
					setErr(true);
				},
				() => {
					getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
						await updateProfile(res.user, {
							displayName,
							photoURL: downloadURL,
						});
						await setDoc(doc(db, "users", res.user.uid), {
							uid:res.user.uid,
							displayName,
							email,
							photoURL: downloadURL,
						});
					});
				}
			);*/
			await uploadBytesResumable(storageRef, file).then(() => {
				getDownloadURL(storageRef).then(async (downloadURL) => {
					try {
						//Update profile
						await updateProfile(res.user, {
							displayName,
							photoURL: downloadURL,
						});
						//create user on firestore
						await setDoc(doc(db, "users", res.user.uid), {
							uid: res.user.uid,
							displayName,
							email,
							photoURL: downloadURL,
						});

						//create empty user chats on firestore
						await setDoc(doc(db, "userChats", res.user.uid), {});
						navigate("/");
					} catch (err) {
						console.log(err);
						setErr(true);
						setLoading(false);
					}
				});
			});
		} catch (err) {
			setErr(true);
		}

		/*const auth = getAuth();
		const res = await createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				console.log(user);
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
			});*/
	};

	return (
		<div className="messages-page">
			<div className="formWrapper">
				<img src="/logo.svg" alt="logo"></img>
				<h2>Register</h2>
				<form onSubmit={handleSubmit}>
					<input type="text" placeholder="Full Name"></input>
					<input type="email" placeholder="email"></input>
					<input type="password" placeholder="password"></input>
					<input style={{ display: "none" }} type="file" id="file"></input>
					<label htmlFor="file">
						<img
							src={`${process.env.PUBLIC_URL}/new-user-icon-18.jpg`}
							height="42px"
							alt="+"
						></img>
						Add an avatar
					</label>
					<button>Sign Up</button>
					{err && <span>Something went wrong</span>}
					<p>
						Already have an account? <Link to="/login">Log In</Link>
					</p>
				</form>
			</div>
		</div>
	);
};

export default RegisterPage;
