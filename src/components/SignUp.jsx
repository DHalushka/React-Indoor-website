import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { signUpValidationSchema, signUpDefaultValues } from "./formikconfig";
import { FormField } from "./FormField";
import { useState } from "react";
import { fb } from "service/firebase";


export const SignUp = () => {
	const navigate = useNavigate();
	const [serverError, setServerError] = useState("");

	const signup = ({ email, userName, password }, { setSubmitting }) => {
		fb.auth
			.createUserWithEmailAndPassword(email, password)
			.then((res) => {
				if (res?.user?.uid) {
					fetch("/api/createUser", {
						method: "POST",
						body: JSON.stringify({
							userName,
							userId: res.user.uid,
						}),
						headers: {
							"Content-Type": "application/json",
						},
					}).then(() => {
						fb.firestore
							.collection("chatUsers")
							.doc(res.user.uid)
							.set({ userName, avatar: "" });
					});
				} else {
					setServerError(
						"We're having trouble signing you up. Please try again"
					);
				}
			})
			.catch((err) => {
				if (err.code === "auth/email-already-in-use") {
					setServerError("An account with this email alredy exists");
				} else {
					setServerError(
						"We're having trouble signing you up. Please try again"
					);
				}
			})
			.finally(() => {
				setSubmitting(false);
				navigate("/");
			});
	};

	return (
		<div className="auth-form">
			<h1>Sign Up</h1>
			<Formik
				onSubmit={signup}
				validateOnMount={true}
				initialValues={signUpDefaultValues}
				validationSchema={signUpValidationSchema}
			>
				{({ isValid, isSubmitting }) => (
					<Form>
						<FormField name="userName" label="User Name" />
						<FormField name="email" label="Email" type="email" />
						<FormField name="password" label="Password" type="password" />
						<FormField
							name="verifyPassword"
							label="Verify Password"
							type="password"
						/>

						<div className="auth-link-container">
							Already have an account?{" "}
							<span className="auth-link" onClick={() => navigate("/login")}>
								Log In
							</span>
						</div>

						<button disabled={isSubmitting || !isValid} type="submit">
							Sign Up
						</button>
					</Form>
				)}
			</Formik>

			{!!serverError && <div className="error">{serverError}</div>}
		</div>
	);
};
