import Layout from '../Layout';
import { useEffect, useState } from 'react';
import Slider from '@mui/material/Slider';

export default function GenPass() {
	const [password, setPassword] = useState('');
	const [copy, setCopy] = useState(false);
	const [value, setValue] = useState(8);
	const [type, setType] = useState('password');

	// const [show, setShow] = useState(false);

	// const showPassword = () => {
	// 	setShow(!show);
	// };

	const genPass = () => {
		const characters =
			'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*?';
		const numbers = '0123456789';
		let generatedPassword = '';
		for (let i = 0; i < value; i++) {
			if (type === 'pin') {
				const randomIn = Math.floor(Math.random() * numbers.length);
				generatedPassword += numbers.charAt(randomIn);
			} else {
				const randomIndex = Math.floor(Math.random() * characters.length);
				generatedPassword += characters.charAt(randomIndex);
			}
		}
		setPassword(generatedPassword);
	};

	// Slider

	const handleInputChange = (event) => {
		setValue(event.target.value === '' ? 0 : Number(event.target.value));
	};

	// Copy btn

	const handleCopy = () => {
		navigator.clipboard.writeText(password);
		setCopy(true);
	};

	useEffect(() => {
		let timer;
		if (copy) {
			timer = setTimeout(() => {
				setCopy(false);
			}, 1000);
		}
		return () => clearTimeout(timer);
	}, [copy]);

	return (
		<Layout>
			{/* password: {
          1. password length - slider
          2. uppercase, lowercase,symbols,numbers
          3. password-strength
          4. new password
          5. copy password
          6. password type: pin, password
          7. ai tool (optional)
    } */}
			<div className="flex flex-row justify-center items-center">
				<div>
					<h1 className="text-5xl font-light text-center">
						Password Generator
					</h1>
					{/* Text area to generate password based on prompts */}
					{/* <div className="flex flex-col justify-center items-center m-10">
						<textarea
							className="text-lg px-3 py-2 mb-10  border-2 border-black rounded-lg
              "
							name="prompt"
							id="prompt"
							placeholder="Write your prompt..."
							cols="30"></textarea>
						
					</div> */}
					{/* Input password field with show and hide btn */}
					{/* <div className="flex flex-row justify-center items-center m-10">
						<input
							type={show ? 'text' : 'password'}
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="text-lg px-3 py-2 border-r-0 border-2 rounded-r-none border-black rounded-lg
              "
						/>
						<button
							onClick={showPassword}
							className="border-2 border-black border-l-0 rounded-l-none  rounded-lg py-2.5 ">
							{show ? 'Hide' : 'Show'}
						</button>
					</div> */}
					<div className="flex flex-row justify-center items-center m-10">
						<div
							className={`border-2 flex rounded-r-none items-center justify-center ${
								password.length >= 12
									? 'bg-green-100'
									: password.length >= 7
									? 'bg-orange-100'
									: 'bg-red-100'
							} border-gray-900 w-[480px] h-14`}>
							<p className="tracking-widest whitespace-nowrap font-medium text-xl">
								{password}
							</p>
						</div>
						<div className="h-14 border-4 border-black rounded-lg rounded-l-none">
							<button
								className="h-full rounded-l-none rounded-r-none border-r border-r-white"
								onClick={handleCopy}>
								{copy ? 'Copied !' : 'Copy'}
							</button>
							<button
								className="h-full rounded-l-none border-l border-l-white"
								onClick={genPass}>
								Generate
							</button>
						</div>
					</div>
					{/* Slider */}
					<div className="flex flex-row justify-center items-center m-10">
						<div className="mx-4">
							<select
								name="type"
								defaultValue="password"
								id="type"
								onChange={(e) => setType(e.target.value)}>
								<option value="password">Password</option>
								<option value="pin">Pin</option>
							</select>
						</div>
						<div className="w-56 flex flex-row">
							<input
								type="number"
								value={value}
								onChange={handleInputChange}
								max={30}
								min={4}
								className="w-12 mx-4 p-1"
							/>
							<Slider
								value={value}
								onChange={(e) => {
									setValue(e.target.value);
									genPass();
								}}
								min={4}
								max={30}
								defaultValue={value}
								aria-label="Default"
								valueLabelDisplay="auto"
								className="mx-1"
							/>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
