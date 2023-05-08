import { useChat } from "context/ChatContext";
import { useResolved } from "hooks/useResolved";
import React from "react";
import { Loader } from "semantic-ui-react";
import { ChatList } from "./ChatList";

export const LeftRail = () => {
	const { myChats, createChatClick } = useChat();
	const chatsResolved = useResolved(myChats);

	return (
		<div className="left-rail">
			{chatsResolved ? (
				<>
					{!!myChats.length ? (
						<div className="chat-list-container">
                            <ChatList/>
                        </div>
					) : (
						<div className="chat-list-container no-chats-yet">No chats yet</div>
					)}
					<button className="create-chat-button" onClick={createChatClick}>
						Create Chat
					</button>
				</>
			) : (
				<div className="chats-loading">
					<Loader active size="huge" />
				</div>
			)}
		</div>
	);
};
