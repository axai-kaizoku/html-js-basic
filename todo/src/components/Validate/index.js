import React, { useState } from 'react';

const Validate = () => {
	const [name, setName] = useState('');
	const [num, setNum] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		if (name.length === 0) return alert('Name cannot be empty');
		if (isNaN(parseInt(num))) {
			return alert(' Enter a valid number');
		} else if (num.length !== 10) {
			return alert('Please enter 10 digit number');
		} else {
			return alert('submitted');
		}
	};
	return (
		<div>
			<h1>Form Validate</h1>
			<input
				type="text"
				placeholder="Name"
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
				onChange={(e) => {
					setNum(e.target.value);
				}}
			/>
			<br />
			<button
				onClick={(e) => {
					handleSubmit(e);
				}}>
				Submit
			</button>
		</div>
	);
};

export default Validate;
