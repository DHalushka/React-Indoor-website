import React from "react";
import { fb } from "../service/firebase";
import { useAuth } from "hooks/useAuth";
import { useEffect, useState } from "react";
import { useResolved } from "hooks/useResolved";
import { useNavigate } from "react-router-dom";
import { useChat } from "context/ChatContext";
import { getChats, ChatEngine } from "react-chat-engine";
import { LeftRail } from "components/LeftRail";
import { ChatToolbar } from "components/ChatToolbar";
import { ChatInput } from "components/ChatInput";
import { MessageList } from "components/MessageList";

function Messages() {

	const {
		myChats,
		setMyChats,
		chatConfig,
		selectedChat,
		selectChatClick,
		setSelectedChat,
	} = useChat();
	//console.log(selectedChat);

	const navigate = useNavigate();
	const { authUser } = useAuth();
	const authResolved = useResolved(authUser);


	useEffect(() => {
		if (authResolved) {
			navigate(!!authUser ? "/messages" : "/login");
		}
		console.log("my chats", myChats, chatConfig);
		/*fb.firestore
			.collection("chatUsers")
			.where("userName", "==", "Daria")
			.get()
			.then((res) => {
				const user = res.docs[0]?.data();
				console.log(user);
			});*/
	}, [authResolved, authUser, navigate, myChats]);
	useEffect(() => {
		console.log("Selected Chat: ", selectedChat);
	}, [selectedChat]);

	/*useEffect(() => {
		fb.firestore
			.collection("chatUsers")
			.where("userName", "==", "Daria")
			.get()
			.then((res) => {
				const user = res.docs[0]?.data();
				console.log(user);
			});
	}, []);*/

	return (
		<div className="messages-page">
			{!!chatConfig && (
				<ChatEngine
					hideUI={true}
					userName={chatConfig.userName}
					projectID={chatConfig.projectID}
					userSecret={chatConfig.userSecret}
					onConnect={() => {
						getChats(chatConfig, setMyChats);
					}}
					onNewChat={(chat) => {
						if (chat.admin.username === chatConfig.userName) {
							selectChatClick(chat);
						}
						setMyChats([...myChats, chat].sort((a, b) => a.id - b.id));
					}}
					onDeleteChat={(chat) => {
						if (selectedChat?.id === chat.id) {
							setSelectedChat(null);
						}
						setMyChats(
							myChats
								.filter((c) => c.id !== chat.id)
								.sort((a, b) => a.id - b.id)
						);
					}}
					onNewMessage={(chatId, message) => {
						//console.log(message);
						if (selectedChat && chatId === selectedChat.id) {
							
							setSelectedChat({
								...selectedChat,
								messages: [message, ...selectedChat.messages],
							});
							//console.log(messages);
						} 
						const chatThatMessageBelongsTo = myChats.find(
							(c) => c.id === chatId
						);
						const filteredChats = myChats.filter((c) => c.id !== chatId);
						const updatedChat = {
							...chatThatMessageBelongsTo,
							last_message: message,
						};
						setMyChats(
							[updatedChat, ...filteredChats].sort((a, b) => a.id - b.id)
						);
						
					}}
				/>
			)}

			<div className="chat-container">
				<LeftRail />
				<div className="current-chat">
					{selectedChat ? (
						<div className="chat">
							<ChatToolbar />
							<MessageList />
							<ChatInput />
						</div>
					) : (
						<div className="no-chat-selected">Select A Chat</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default Messages;
