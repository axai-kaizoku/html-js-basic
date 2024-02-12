import React, { useState } from 'react';
import './styles.css';

const Validate2 = () => {
	const [name, setName] = useState('');
	const [num, setNum] = useState('');
	const [email, setEmail] = useState('');

	const handleClick = (e) => {
		e.preventDefault();
		const emailRgx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

		if (name.trim().length === 0) {
			return alert('Name cannot be empty');
		}
		if (isNaN(parseInt(num))) {
			return alert('Enter valid number');
		} else if (num.length !== 10) {
			return alert('Number should be 10 digit');
		}

		if (!emailRgx.test(email)) {
			return alert('Enter valid email address');
		}
		alert('Submitted');
	};
	return (
		<div className="validate">
			<h1>Form Basic</h1>
			<input
				type="text"
				placeholder="Name"
				className="name"
				value={name}
				onChange={(e) => {
					setName(e.target.value);
				}}
			/>
			<br />

			<input
				type="tel"
				placeholder="Number"
				value={num}
				className="number"
				onChange={(e) => {
					setNum(e.target.value);
				}}
			/>
			<br />

			<input
				type="email"
				placeholder="Email"
				value={email}
				className="email"
				onChange={(e) => {
					setEmail(e.target.value);
				}}
			/>
			<br />
			<button
				onClick={(e) => {
					handleClick(e);
				}}>
				Sumbit
			</button>
		</div>
	);
};

export default Validate2;
