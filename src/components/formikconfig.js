import * as Yup from "yup";

export const signUpDefaultValues = {
	email: "",
	password: "",
	userName: "",
	verifyPassword: "",
};

export const signUpValidationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required').min(8, "Must be at least 8 characters"),
    verifyPassword: Yup.string().required('Required').oneOf([Yup.ref('password'),null],"Passwords do not match"),
    userName:Yup.string().required('Required').matches(/^\S*$/,"No spaces").min(3,"Must be at least 3 characters long"),
});

export const logInDefaultValues = {
	email: "",
	password: "",
};

export const logInValidationSchema = Yup.object().shape({
    email: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
});