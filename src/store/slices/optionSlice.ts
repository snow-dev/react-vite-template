import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Option } from '@utils/menu.types.ts';

import { RootState } from '../store.ts';

const initialState = {
	options: [] as Option[],
};

export const optionSlice = createSlice({
	initialState,
	name: 'optionService',
	reducers: {
		setOptions: (state, action: PayloadAction<Option[]>) => {
			state.options = action.payload;
		},
	},
});

export const { setOptions } = optionSlice.actions;

export const selectOptions = (state: RootState): Option[] => state.options.options;
