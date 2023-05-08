import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

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
