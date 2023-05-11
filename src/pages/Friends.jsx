import Chats from "components/Messages/Chats";
import Search from "components/Messages/Search";
import React from "react";

function Friends() {
	return (
		<div className="friends-page">
			<h1>Your Friends</h1>
			<Chats />
		</div>
	);
}

export default Friends;
