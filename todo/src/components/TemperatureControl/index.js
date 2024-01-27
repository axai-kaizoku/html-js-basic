import React, { useState } from 'react';
import './styles.css';

const TemperatureControl = () => {
	const [temperature, setTemperature] = useState(10);
	const increment = () => {
		if (temperature < 30) setTemperature(temperature + 1);
	};
	const decrement = () => {
		if (temperature > -10) setTemperature(temperature - 1);
	};
	return (
		<div className="app-container">
			<div
				className="temperature-display-container"
				id={
					temperature < 8 ? 'cool' : temperature > 18 ? 'hot' : 'temperature'
				}>
				<h1 className="temperature-display">{temperature}&deg;C</h1>
			</div>
			<div className="button-container">
				<button
					id="decrementBtn"
					onClick={decrement}>
					<b>-</b>
				</button>
				<button
					id="incrementBtn"
					onClick={increment}>
					<b>+</b>
				</button>
			</div>
		</div>
	);
};

export default TemperatureControl;
