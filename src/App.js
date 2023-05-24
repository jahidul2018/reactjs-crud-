import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./components/Contact";
import Sales from "./Pages/Sales";
import Support from "./Pages/Support";
import Create from "./components/Create";
import Read from "./components/Read";
import Update from "./components/Update";

function App() {
	return (
		<BrowserRouter>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
					{/* <li>
						<Link to="/create">Create</Link>
					</li> */}
				</ul>
			</nav>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />}>
					<Route path="sales" element={<Sales />} />
					<Route path="support" element={<Support />} />
				</Route>
				<Route path="/create" element={<Create />} />

				<Route path="/read" element={<Read />} />
				<Route path="/update" element={<Update />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
