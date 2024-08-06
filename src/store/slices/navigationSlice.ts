import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store.ts';

const initialState = {
	route: '',
};

export const navigationSlice = createSlice({
	initialState,
	name: 'navigation',
	reducers: {
		setRoute: (state, action: PayloadAction<string>) => {
			state.route = action.payload;
		},
	},
});

export const { setRoute } = navigationSlice.actions;

export const selectRoute = (state: RootState): string => state.navigation.route;
