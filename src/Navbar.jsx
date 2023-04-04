import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
	return (
		<nav>
			<ul>
				<li>
					<span className="my-icon">t</span>
					<Link to="/">Home</Link>{" "}
				</li>
				<li>
					<span className="my-icon">r</span>
					<Link to="/library">Library</Link>
				</li>
				<li>
					<span className="my-icon">q</span>
					<Link to="/messages">Messages</Link>
				</li>
				<li>
					<span className="my-icon">e</span>
					<Link to="/schedule">Schedule</Link>
				</li>
				<li>
					<span className="my-icon">w</span>
					<Link to="/friends">Friends</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
