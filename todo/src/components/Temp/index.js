import React, { useState } from 'react';
import './styles.css';

const Temp = () => {
	const [degrees, setDegrees] = useState(10);
	const decrement = () => {
		if (degrees > -10) setDegrees(degrees - 1);
	};
	const increment = () => {
		if (degrees < 20) setDegrees(degrees + 1);
	};
	return (
		<div className="temp">
			<div className="temp-div">{degrees}&deg;</div>
			<div className="btn-div">
				<button onClick={decrement}>-</button>
				<button onClick={increment}>+</button>
			</div>
			<p>
				{degrees >= -10 && degrees <= 2
					? 'Ice cold baby'
					: degrees >= 2 && degrees <= 12
					? 'Normal weather baby'
					: degrees >= 12 && degrees <= 20
					? 'Too damn hot'
					: ''}
			</p>
		</div>
	);
};

export default Temp;
