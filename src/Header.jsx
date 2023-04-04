import React from "react";
import logo from "./LOGO.svg"

function Header() {
	return (
        <header>
            <a href="#">
                <img alt="logo" src={logo}></img>
            </a>
        </header>
    )
}

export default Header;
