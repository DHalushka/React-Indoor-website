import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Header from "../Header";
import Footer from "../Footer";

const Layout = () => {
	return (
		<>
			<Header />
			<Navbar />
			<Outlet />
			<Footer />
		</>
	);
};

export default Layout;
