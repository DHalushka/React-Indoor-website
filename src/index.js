import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import Library from "./pages/Library";
import Messages from "./pages/Messages";
import "semantic-ui-css/semantic.min.css"
import "./styles/font.css";
import "./styles/chat.css";
import "./styles/index.css";
import Friends from "./pages/Friends";
import Cart from "./pages/Cart";
import GamePage from "./pages/GamePage";
import About from "./pages/About";
import Login from "components/Login";
import { SignUp } from "components/SignUp";
import { useAuth } from "hooks/useAuth";
import { useEffect, useState } from "react";
import { useResolved } from "hooks/useResolved";
import { ChatProvider } from "context/ChatContext";

export default function App() {
	const { authUser } = useAuth();
	const authResolved = useResolved(authUser);

	return (
		<BrowserRouter>
			<ChatProvider authUser={authUser}>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="library" element={<Library />} />
						<Route path="schedule" element={<Schedule />} />
						<Route path="cart" element={<Cart />} />
						<Route path="library/:id" element={<GamePage />} />
						<Route path="About" element={<About />} />
						<Route path="friends" element={<Friends />} />
						{authResolved ? (
							<Route path="messages" element={<Messages />} />
						) : (
							<>LOADING...</>
						)}
						<Route path="login" element={<Login />} />
						<Route path="signup" element={<SignUp />} />
					</Route>
				</Routes>
			</ChatProvider>
		</BrowserRouter>
	);
}

ReactDOM.render(<App />, document.getElementById("root"));