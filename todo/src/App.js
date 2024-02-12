import './App.css';
import TemperatureControl from './components/TemperatureControl';
import Time from './components/Time';
import Todo from './components/Todo/Todo';
import { Routes, Route } from 'react-router-dom';

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
			</Routes>
		</>
	);
}

export default App;
