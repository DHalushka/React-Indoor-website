import ReactDOM from "react-dom";
import App from "App";
import { AuthContextProvider } from "context/AuthContext";
import React from "react";
import { ChatContextProvider } from "context/ChatContext";

ReactDOM.render(
	<React.StrictMode>
		<AuthContextProvider>
			<ChatContextProvider>
				<App />
			</ChatContextProvider>
		</AuthContextProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
