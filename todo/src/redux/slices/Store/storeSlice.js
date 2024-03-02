import { createSlice } from '@reduxjs/toolkit';

export const storeSlice = createSlice({
	name: 'store',
	initialState: {
		value: [
			{
				id: '5',
				name: 'Vinland Saga',
				genre: 'history',
				mc: 'Toriffin',
				status: 'on going',
			},
		],
	},
	reducers: {
		updateStore: (state, action) => {
			state.value = [...action.payload];
		},
		addToStore: (state, action) => {
			state.value.push(action.payload);
		},
	},
});

export const { updateStore, addToStore } = storeSlice.actions;

export default storeSlice.reducer;
