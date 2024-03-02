import { configureStore } from '@reduxjs/toolkit';
import storeReducer from './slices/Store/storeSlice';
import cartReducer from './slices/Cart/cartSlice';

export default configureStore({
	reducer: {
		store: storeReducer,
		cart: cartReducer,
	},
});
