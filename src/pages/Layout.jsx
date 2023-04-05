import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const Layout = () => {
	return (
		<>
			<Header />
			<div className="main-container">
				<Navbar />
				<Outlet />
			</div>
			<Footer />
		</>
	);
};

export default Layout;
