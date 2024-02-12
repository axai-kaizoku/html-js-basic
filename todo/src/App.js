import './App.css';
import TemperatureControl from './components/TemperatureControl';
import Time from './components/Time';
import Todo from './components/Todo/Todo';
import { Routes, Route } from 'react-router-dom';
import Validate from './components/Validate';
import Validate2 from './components/Validate2';

function App() {
	return (
		<>
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
			</Routes>
		</>
	);
}

export default App;
