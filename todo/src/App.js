import TemperatureControl from './components/TemperatureControl';
import Time from './components/Time';
import Todo from './components/Todo/Todo';
import { Routes, Route, Link } from 'react-router-dom';
import Validate2 from './components/Validate2';
import Cart from './pages/Cart';
import Store from './pages/Store';
import { useSelector } from 'react-redux';
import AddToStore from './pages/AddToStore';
import GenPass from './pages/Password';

function App() {
	const cart = useSelector((state) => state.cart.value);
	return (
		<>
			<header className="fixed top-0 w-full">
				<nav
					className="bg-transparent backdrop-blur-sm shadow-2xl "
					id="nav-img">
					<ul className="flex flex-row justify-evenly items-center h-10 w-full">
						<li>
							<Link
								to="/"
								className="link">
								Home
							</Link>
						</li>
						<li>
							<Link
								to="todo"
								className="link">
								Todo
							</Link>
						</li>
						<li>
							<Link
								to="/temp"
								className="link">
								Temp
							</Link>
						</li>
						<li>
							<Link
								to="/form"
								className="link">
								Form
							</Link>
						</li>
						<li>
							<Link
								to="/password"
								className="link">
								Password
							</Link>
						</li>
						<li>
							<Link
								to="/store"
								className="link">
								Store
							</Link>
						</li>
						<li>
							<Link
								to="/addtostore"
								className="link">
								AddToStore
							</Link>
						</li>
						<li>
							<Link
								to="/cart"
								className="link">
								Cart ({cart.length})
							</Link>
						</li>
					</ul>
				</nav>
			</header>
			<Routes>
				<Route
					path="/"
					element={<Time />}
				/>
				<Route
					path="/todo"
					element={<Todo />}
				/>
				<Route
					path="/temp"
					element={<TemperatureControl />}
				/>
				<Route
					path="/form"
					element={<Validate2 />}
				/>
				<Route
					path="/cart"
					element={<Cart />}
				/>
				<Route
					path="/store"
					element={<Store />}
				/>
				<Route
					path="/addtostore"
					element={<AddToStore />}
				/>
				<Route
					path="/password"
					element={<GenPass />}
				/>
			</Routes>
		</>
	);
}

export default App;
