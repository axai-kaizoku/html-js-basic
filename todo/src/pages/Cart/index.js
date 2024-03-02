import { useDispatch, useSelector } from 'react-redux';
import { resetCart } from '../../redux/slices/Cart/cartSlice';
import Layout from '../Layout';

export default function Cart() {
	const data = useSelector((state) => state.cart.value);
	const dispatch = useDispatch();
	return (
		<Layout>
			<h1 className="text-center text-5xl font-thin">Cart</h1>
			<div className="flex flex-col justify-center  h-full w-full">
				<div className=" w-full h-full px-6 py-10 flex flex-row justify-start gap-10  flex-wrap">
					{data.map((item) => (
						<div
							key={item.id}
							className="w-full h-fit flex flex-row justify-around items-center border p-6 bg-slate-50 shadow-sm hover:shadow-xl rounded">
							<h1>{item.name}</h1>
							<p>Genre: {item.genre}</p>
							<p>MC: {item.mc}</p>
							<p>Status: {item.status}</p>
						</div>
					))}
					{data.length > 0 ? (
						<div className="w-full h-full flex justify-center  items-center gap-10">
							<button onClick={() => dispatch(resetCart())}>Reset</button>
							<button>Checkout</button>
						</div>
					) : (
						<div className="text-center">
							<h1>Cart is empty :(</h1>
						</div>
					)}
				</div>

				{/* {JSON.stringify(data)} */}
			</div>
		</Layout>
	);
}
