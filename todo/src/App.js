import './App.css';
// import Suggestions from './components/Suggestion';
import TemperatureControl from './components/TemperatureControl';
import AutoCorrection from "./components/AutoCorrection"
import Time from './components/Time';
import Todo from './components/Todo/Todo';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<>
			<Routes>
				<Route
					path="/"
					element={<AutoCorrection />}
				/>
				{/* <Route
					path="/"
					element={<Time />}
				/> */}
				<Route
					path="/todo"
					element={<Todo />}
				/>
				<Route
					path="/temp"
					element={<TemperatureControl />}
				/>
				<Route
					path="/correction"
					element={<AutoCorrection/>}
				/>
			</Routes>
		</>
	);
}

export default App;
