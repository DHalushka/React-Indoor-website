import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import Library from "./pages/Library";
import Messages from "./pages/Messages";
import "./styles/font.css";
import "./styles/chat.css";
import "./styles/index.css";
import Friends from "./pages/Friends";
import Cart from "./pages/Cart";
import GamePage from "./pages/GamePage";
import About from "./pages/About";
import { useContext } from "react";
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";
import { AuthContext } from "./context/AuthContext";

function App() {
	const { currentUser } = useContext(AuthContext);
	console.log(currentUser);
	const ProtectedRoute = ({ children }) => {
		if (!currentUser) {
			return <Navigate to="/login" />;
		}
		return children;
	};
	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="library" element={<Library />} />
					<Route path="cart" element={<Cart />} />
					<Route path="library/:id" element={<GamePage />} />
					<Route path="About" element={<About />} />
					<Route path="login" element={<LoginPage />} />
					<Route path="register" element={<RegisterPage />} />
					<Route
						path="friends"
						element={
							<ProtectedRoute>
								<Friends />
							</ProtectedRoute>
						}
					/>
					<Route
						path="messages"
						element={
							<ProtectedRoute>
								<Messages />
							</ProtectedRoute>
						}
					/>
					<Route
						path="schedule"
						element={
							<ProtectedRoute>
								<Schedule />
							</ProtectedRoute>
						}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
