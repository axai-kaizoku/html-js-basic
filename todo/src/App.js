import TemperatureControl from './components/TemperatureControl';
import Time from './components/Time';
import Todo from './components/Todo/Todo';
import { Routes, Route, Link } from 'react-router-dom';
import Validate from './components/Validate';
import Validate2 from './components/Validate2';
import Cart from './pages/Cart';
import Store from './pages/Store';
import { useSelector } from 'react-redux';

function App() {
	const cart = useSelector((state) => state.cart.value);
	return (
		<>
			<header>
				<nav className="bg-transparent backdrop-blur-md shadow-2xl border-b-2 border-b-black">
					<ul className="flex flex-row justify-evenly items-center h-10 w-full">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="todo">todo</Link>
						</li>
						<li>
							<Link to="/temp">temp</Link>
						</li>
						<li>
							<Link to="/form">form</Link>
						</li>
						<li>
							<Link to="/form2">form2</Link>
						</li>
						<li>
							<Link to="/store">Store</Link>
						</li>
						<li>
							<Link to="/cart">Cart ({cart.length})</Link>
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
					element={<Validate />}
				/>
				<Route
					path="/form2"
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
			</Routes>
		</>
	);
}

export default App;
