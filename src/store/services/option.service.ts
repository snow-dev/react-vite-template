import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Option } from '../../utils/menu.types.ts';

export const optionService = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: `${import.meta.env.VITE_REACT_APP_API_URL}${import.meta.env.VITE_REACT_APP_API_PREFIX}`,
		fetchFn: async (url, args) => {
			const controller = new AbortController();
			const timeout = setTimeout(() => controller.abort(), 7500000);
			return fetch(url, { ...args, signal: controller.signal }).finally(() => clearTimeout(timeout));
		},
	}),

	endpoints: (build) => ({
		getOptions: build.query<Option[], void>({
			query: () => '/menu',
		}),
	}),

	reducerPath: 'optionService',
	tagTypes: ['options'],
});

export const { useLazyGetOptionsQuery } = optionService;
