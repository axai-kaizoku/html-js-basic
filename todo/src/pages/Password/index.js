import Layout from '../Layout';
import { useEffect, useState } from 'react';

export default function GenPass() {
	const [password, setPassword] = useState('');
	const [show, setShow] = useState(false);
	const [copy, setCopy] = useState(false);
	const showPassword = () => {
		setShow(!show);
	};
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
					<div className="flex flex-col justify-center items-center m-10">
						<textarea
							className="text-lg px-3 py-2 mb-10  border-2 border-black rounded-lg
              "
							name="prompt"
							id="prompt"
							placeholder="Write your prompt..."
							cols="30"></textarea>
						<button>Generate</button>
					</div>
					<div className="flex flex-row justify-center items-center m-10">
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
					</div>
					<button onClick={handleCopy}>{copy ? 'Copied !' : 'Copy'}</button>
				</div>
			</div>
		</Layout>
	);
}
