import React from "react";
import FooterSection from "./FooterSection";
import logo from "./LOGO.svg";

function Footer() {
	return (
		<footer>
			<div class="footer-top">
				<div className="info-box">
					<img alt="logo" src={logo}></img>
					<h5>
						Social Network <br /> for video game fans
					</h5>
				</div>
				<div className="spacer"></div>
				<FooterSection
					sectionTitle="Product"
					sectionLink1="Download"
					sectionLink2="Nitro"
					sectionLink3="Status"
				></FooterSection>
				<FooterSection
					sectionTitle="Company"
					sectionLink1="About"
					sectionLink2="Jobs"
				></FooterSection>
				<FooterSection
					sectionTitle="Resourses"
					sectionLink1="Code"
					sectionLink2="Creator"
					sectionLink3="Blog"
				></FooterSection>
				<FooterSection
					sectionTitle="Policies"
					sectionLink1="Terms"
					sectionLink2="Privacy"
				></FooterSection>
			</div>
			<div className="line"></div>
			<div class="footer-bottom">
				<p>@2022 Indoor LLC.</p>
				<p>Privacy Policy</p>
				<p>Terms and conditions</p>
				<p>Follow us:</p>
			</div>
		</footer>
	);
}

export default Footer;
