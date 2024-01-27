import './App.css';
import Temp from './components/Temp';
import TemperatureControl from './components/TemperatureControl';
// import { useState } from 'react';
// import Todo from './components/Todo/Todo';

function App() {
	return (
		<div className="App">
			{/* <Todo /> */}
			{/* Hello React App */}
			<TemperatureControl />
			<Temp />
		</div>
	);
}

export default App;
