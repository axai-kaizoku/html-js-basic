import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		value: [],
	},
	reducers: {
		addToCart: (state, action) => {
			state.value.push(action.payload);
		},
		resetCart: (state, action) => {
			state.value = [];
		},
	},
});

export const { addToCart, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
