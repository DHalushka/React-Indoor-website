import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";

const Message = ({ message }) => {
	const { currentUser } = useContext(AuthContext);
	const { data } = useContext(ChatContext);

	const seconds = message.date.seconds * 100;
	const hours = new Date(seconds).getHours();
	let minutes = new Date(seconds).getMinutes();
	if(minutes<10){
		minutes = "0"+minutes;
	}
	const date = `${hours}:${minutes}`;

	return (
		<div
			className={`message ${message.senderId === currentUser.uid && "owner"}`}
		>
			<div className="messageInfo">
				<img
					src={
						message.senderId === currentUser.uid
							? currentUser.photoURL
							: data.user.photoURL
					}
					alt=""
				/>
				<span>{date}</span>
			</div>
			<div className="messageContent">
				<p>{message.text}</p>
				{message.img && <img src={message.img} alt="" />}
			</div>
		</div>
	);
};

export default Message;
