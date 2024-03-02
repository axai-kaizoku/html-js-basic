import { useDispatch } from 'react-redux';
import { addToStore } from '../../redux/slices/Store/storeSlice';
import Layout from '../Layout';
import { useNavigate } from 'react-router-dom';

export default function AddToStore() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();
		const name = e.target[0].value;
		const mc = e.target[1].value;
		const genre = e.target[2].value;
		const status = e.target[3].value;
		const data = {
			id: '8',
			name: name,
			mc: mc,
			genre: genre,
			status: status,
		};
		dispatch(addToStore(data));
		navigate('/store');
	};
	return (
		<Layout>
			<h1 className="text-center text-5xl font-thin">Admin</h1>
			<section className="mt-16">
				<div className="flex flex-col items-center px-6 py-8 mx-auto md:h-screen lg:py-0">
					<div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
						<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
							<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
								Add Items to Store
							</h1>
							<form
								className="space-y-4 md:space-y-6"
								onSubmit={handleSubmit}>
								<div>
									<label
										htmlFor="name"
										className="block mb-2 text-sm font-medium text-gray-900">
										Anime Name
									</label>
									<input
										type="text"
										id="name"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-gray-700 focus:border-gray-700  block w-full p-2.5"
									/>
								</div>
								<div>
									<label
										htmlFor="mc"
										className="block mb-2 text-sm font-medium text-gray-900">
										Main Character
									</label>
									<input
										type="text"
										id="mc"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-gray-700 focus:border-gray-700  block w-full p-2.5"
									/>
								</div>
								<div>
									<label
										htmlFor="genre"
										className="block mb-2 text-sm font-medium text-gray-900">
										Genre
									</label>
									<input
										list="genre"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-gray-700 focus:border-gray-700  block w-full p-2.5"
									/>
									<datalist id="genre">
										<option value="Shonen" />
										<option value="Ecchi" />
										<option value="History" />
										<option value="Action" />
										<option value="Adventure" />
									</datalist>
								</div>

								<div>
									<label
										htmlFor="status"
										className="block mb-2 text-sm font-medium text-gray-900">
										Status
									</label>
									<select
										name="status"
										id="status"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-gray-700 focus:border-gray-700  block w-full p-2.5">
										<option value="completed">Completed</option>
										<option value="ongoing">Ongoing</option>
									</select>
								</div>
								<button
									className="w-full border text-black bg-transparent focus:ring-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
									type="submit">
									Add to Store
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
}
