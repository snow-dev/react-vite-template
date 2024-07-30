import { ReactElement, useMemo } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material';

import Error from '@pages/Error';
import Home from '@pages/Home.tsx';
import Administration from '@pages/Administration.tsx';

import { createCustomTheme } from '../../assets/theme/theme.ts';
import RootContainer from '../templates/root-container.tsx';

const router = createBrowserRouter([
	{
		children: [
			{
				children: [
					{
						children: [
							{
								children: [
									{
										element: <Home />,
										path: ':menu', // Componente que maneja el contenido final
									},
								],
								element: <Home />,
								path: ':type',
							},
						],
						path: ':module',
					},
				],
				path: ':company',
			},
			{
				element: <Administration />,
				path: '/administration',
			},
		],
		element: <RootContainer />,
		errorElement: <Error />,
		path: '/',
	},
]);

const RootView = (): ReactElement => {
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

	const fullTheme = useMemo(() => createCustomTheme(prefersDarkMode ? 'dark' : 'light'), [prefersDarkMode]);

	return (
		<ThemeProvider theme={fullTheme}>
			<CssBaseline />
			<RouterProvider router={router} />
		</ThemeProvider>
	);
};

export default RootView;
