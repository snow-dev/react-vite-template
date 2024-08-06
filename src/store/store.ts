import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { optionService } from '@services/option.service.ts';
import { companyService } from '@services/company.service.ts';
import { optionSlice } from '@slices/optionSlice.ts';
import { navigationSlice } from '@slices/navigationSlice.ts';

const store = configureStore({
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }).concat([optionService.middleware, companyService.middleware]),
	reducer: {
		options: optionSlice.reducer,
		[optionService.reducerPath]: optionService.reducer,
		[companyService.reducerPath]: companyService.reducer,
		[navigationSlice.reducerPath]: navigationSlice.reducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
export default store;
