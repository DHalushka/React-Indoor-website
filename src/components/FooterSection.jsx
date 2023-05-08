import React from "react";
import { Link } from "react-router-dom";

function FooterSection(props) {
    const {
        sectionTitle,
        sectionLink1,
        sectionLink2,
        sectionLink3
    }=props;
	return (
        <div className="footer-section">
            <h5>{sectionTitle}</h5>
            <Link to={sectionLink1}>{sectionLink1}</Link>
            <Link to={sectionLink2}>{sectionLink2}</Link>
            <Link to={sectionLink3}>{sectionLink3}</Link>
        </div>
    )
}


export default FooterSection;
