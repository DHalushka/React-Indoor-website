import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import Library from "./pages/Library";
import Messages from "./pages/Messages";
import "./index.css";
import "./font.css"
import Friends from "./pages/Friends";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="library" element={<Library />} />
					<Route path="schedule" element={<Schedule />} />
					<Route path="messages" element={<Messages />} />
					<Route path="friends" element={<Friends />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

ReactDOM.render(<App />, document.getElementById("root"));
