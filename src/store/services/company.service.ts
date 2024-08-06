import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { MenuOption } from '@utils/types.ts';
import { Company } from '@utils/company.types.ts';

export const companyService = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: `${import.meta.env.VITE_REACT_APP_API_URL}${import.meta.env.VITE_REACT_APP_API_PREFIX}`,
		fetchFn: async (url, args) => {
			const controller = new AbortController();
			const timeout = setTimeout(() => controller.abort(), 7500000);
			return fetch(url, { ...args, signal: controller.signal }).finally(() => clearTimeout(timeout));
		},
	}),

	endpoints: (build) => ({
		getCompanies: build.query<MenuOption[], void>({
			query: () => '/company',
			transformResponse: (response: Company[]) =>
				response.map(
					(company: Company): MenuOption => ({
						active: false,
						name: company.name,
						route: company.name,
						uuid: company.uuid,
						visible: true,
					}),
				),
		}),
	}),

	reducerPath: 'companyService',
	tagTypes: ['company'],
});

export const { useLazyGetCompaniesQuery } = companyService;
