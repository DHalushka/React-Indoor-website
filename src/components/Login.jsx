import React from "react";
import { Formik, Form } from "formik";
import { logInDefaultValues, logInValidationSchema } from "./formikconfig";
import { FormField } from "./FormField";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { fb } from "service/firebase";

const Login = () => {
	const navigate = useNavigate();
	const [serverError, setServerError] = useState("");

	const login = ({ email, password }, { setSubmitting }) => {
		fb.auth
			.signInWithEmailAndPassword(email, password)
			.then((res) => {
				if (!res.user) {
					serverError("We're having trouble logging in. Please try again");
				}
			})
			.catch((err) => {
				if (err.code === "auth/wrong-password") {
					serverError("Invalid credentials");
				} else if (err.code === "auth/user-not-found") {
					setServerError("No account for this email");
				} else {
					serverError("Something went wrong :(");
				}
			})
			.finally(() => {
				setSubmitting(false);
				navigate("/");
			});
	};

	return (
		<div className="auth-form">
			<h1>Login</h1>

			<Formik
				onSubmit={login}
				validateOnMount={true}
				initialValues={logInDefaultValues}
				validationSchema={logInValidationSchema}
			>
				{({ isValid, isSubmitting }) => (
					<Form>
						<FormField name="email" label="Email" type="email" />
						<FormField name="password" label="Password" type="password" />

						<div className="auth-link-container">
							Don't have an account?{" "}
							<span className="auth-link" onClick={() => navigate("/signup")}>
								Sign Up
							</span>
						</div>

						<button disabled={isSubmitting || !isValid} type="submit">
							Log In
						</button>
					</Form>
				)}
			</Formik>
			{!!serverError && <div className="error">{serverError}</div>}
		</div>
	);
};

export default Login;
