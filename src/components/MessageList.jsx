import { useChat } from "../context/ChatContext";
import { ChatAvatar } from "../components/ChatAvatar";
import { groupMessages } from "../helpers/groupMessages";
import { useScrollToBottom } from "../hooks/useScrollToBottom";

export const MessageList = () => {
	const { selectedChat } = useChat();
	useScrollToBottom(selectedChat, "chat-messages");

    console.log(selectedChat.messages[0]);

	return (
		<div className="chat-messages">
			{!!selectedChat.messages.length ? (
				groupMessages(selectedChat.messages).map((m, index) => (
					<div key={index} className="chat-message">
						<div className="chat-message-header">
							<ChatAvatar
								className="message-avatar"
								username={m[0].sender.username}
								chat={selectedChat}
							/>
							<div className="message-author">{m[0].sender.username}</div>
						</div>

						<div className="message-content">
							{m.map((individualMessage, index) => (
								<div key={index}>
									<div className="message-text">{individualMessage.text}</div>

									{!!individualMessage.attachments.length && (
										<img
											className="message-image"
											src={individualMessage.attachments[0].file}
											alt={individualMessage.id + "-attachment"}
										/>
									)}
								</div>
							))}
						</div>
					</div>
				))
			) : (
				<div className="no-messages-yet">No messages yet</div>
			)}
		</div>
	);
};
