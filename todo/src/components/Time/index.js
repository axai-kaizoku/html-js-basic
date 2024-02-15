import React, { useEffect, useState } from 'react';
import './styles.css';

const Time = () => {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		const intervalId = setInterval(() => {
			setTime(new Date());
		}, 1000);
		return () => clearInterval(intervalId);
	}, []);

	// if ('geolocation' in navigator) {
	// 	let location;
	// 	navigator.geolocation.getCurrentPosition(function (position) {
	// 		let lat = position.coords.latitude;
	// 		let long = position.coords.longitude;
	// 		location = [lat, long];
	// 	});
	// 	// console.log(location);
	// } else {
	// 	console.log(':(');
	// }

	const hrs = time.getHours();
	const min = time.getMinutes();
	const sec = time.getSeconds();

	const days = [
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
		'Sunday',
	];

	const day = days[time.getDay() - 1];

	const date = time.toDateString().slice(3);
	// console.log(min.toString().length);
	return (
		<div className="outer-time-div">
			<div className="time-comp">
				<p className="time">
					{hrs.toString().length === 1 ? `0${hrs}` : hrs}:
					{min.toString().length === 1 ? `0${min}` : min}:
					{sec.toString().length === 1 ? `0${sec}` : sec}
				</p>
				<p className="day">{day}</p>
				<p className="date">{date}</p>
			</div>
		</div>
	);
};

export default Time;
