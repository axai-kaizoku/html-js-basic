import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { updateStore } from '../../redux/slices/Store/storeSlice';
import { addToCart } from '../../redux/slices/Cart/cartSlice';

export default function Store() {
	const data = useSelector((state) => state.store.value);
	const dispatch = useDispatch();

	const addItemToCart = (id) => {
		dispatch(addToCart(data.filter((item) => item.id === id)[0]));
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get('http://localhost:8080/data');
				const data = res.data;
				dispatch(updateStore(data));
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);

	return (
		<div className="h-screen w-full">
			<h1 className="text-center text-5xl font-thin">Store Page</h1>
			<div className="flex flex-row justify-center items-center h-full w-full">
				<div className="p-10 px-24 flex flex-row justify-start gap-10 items-center flex-wrap">
					{data.map((item) => (
						<div
							key={item.id}
							className="w-60 h-56 border p-6 bg-slate-50 shadow-sm hover:shadow-xl rounded">
							<h1>{item.name}</h1>
							<p>Genre: {item.genre}</p>
							<p>MC: {item.mc}</p>
							<p>Status: {item.status}</p>
							<button onClick={() => addItemToCart(item.id)}>Buy</button>
						</div>
					))}
				</div>
				{/* {JSON.stringify(data)} */}
			</div>
		</div>
	);
}
