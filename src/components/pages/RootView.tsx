import { ReactElement, useMemo } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material';

import Error from '@pages/Error';
import Home from '@pages/Home.tsx';

import { createCustomTheme } from '../../assets/theme/theme.ts';
import RootContainer from '../templates/root-container.tsx';

const router = createBrowserRouter([
	{
		children: [{ element: <Home />, path: '/home' }],
		element: <RootContainer />,
		errorElement: <Error />,
		path: '/',
	},
]);

const RootView = (): ReactElement => {
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

	// theme.palette.mode = prefersDarkMode ? 'dark' : 'light';

	const fullTheme = useMemo(() => createCustomTheme(prefersDarkMode ? 'dark' : 'light'), [prefersDarkMode]);

	return (
		<ThemeProvider theme={fullTheme}>
			<CssBaseline />
			<RouterProvider router={router} />
		</ThemeProvider>
	);
};

export default RootView;
