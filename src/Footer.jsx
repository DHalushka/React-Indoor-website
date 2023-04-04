import React from "react";
import FooterSection from "./FooterSection";
import logo from "./LOGO.svg"

function Footer() {
	return (
        <footer>            
            <div class="footer-top">
                <div className="info-box">
                    <img alt="logo" src={logo}></img>
                    <h5>Social Network <br/> for video game fans</h5>
                </div>
                <div className="spacer"></div>
                <FooterSection></FooterSection>
                <FooterSection></FooterSection>
                <FooterSection></FooterSection>
                <FooterSection></FooterSection>                
            </div>
            <div className="line"></div>
            <div class="footer-bottom">
                <p>@2022 Indoor LLC.</p>
                <p>Privacy Policy</p>
                <p>Terms and conditions</p>
                <p>Follow us:</p>
            </div>
        </footer>
    )
}

export default Footer;
