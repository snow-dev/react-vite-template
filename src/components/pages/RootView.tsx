import { ReactElement, useMemo } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material';

import Error from '@pages/Error';
import Home from '@pages/Home.tsx';
import Administration from '@pages/Administration.tsx';

import { createCustomTheme } from '../../assets/theme/theme.ts';
import RootContainer from '../templates/root-container.tsx';

/*const router = createBrowserRouter([
	{
		children: [
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
												path: ':menu',
											},
										],
										element: <Home />,
										path: ':type',
									},
								],
								element: <Home />,
								path: ':module',
							},
						],
						element: <Home />,
						path: ':company',
					},
				],
				element: <Home />,
				path: 'home',
			},
			{
				children: [
					{
						children: [
							{
								children: [
									{
										children: [
											{
												element: <Administration />,
												path: ':menu',
											},
										],
										element: <Administration />,
										path: ':type',
									},
								],
								element: <Administration />,
								path: ':module',
							},
						],
						element: <Administration />,
						path: ':company',
					},
				],
				element: <Administration />,
				path: 'administration',
			},
		],
		element: <RootContainer />,
		errorElement: <Error />,
		path: '/',
	},
]);*/

const RootView = (): ReactElement => {
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

	const fullTheme = useMemo(() => createCustomTheme(prefersDarkMode ? 'dark' : 'light'), [prefersDarkMode]);

	return (
		<ThemeProvider theme={fullTheme}>
			<CssBaseline />
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<RootContainer />}>
						<Route path='home'>
							<Route index element={<Home />} />
							<Route path=':company'>
								<Route index element={<Home />} />
								<Route path=':module'>
									<Route index element={<Home />} />
									<Route path=':type'>
										<Route index element={<Home />} />
										<Route path=':menu' element={<Home />} />
									</Route>
								</Route>
							</Route>
						</Route>
						<Route path='administration'>
							<Route index element={<Administration />} />
							<Route path=':company'>
								<Route index element={<Administration />} />
								<Route path=':module'>
									<Route index element={<Administration />} />
									<Route path=':type'>
										<Route index element={<Administration />} />
										<Route path=':menu' element={<Administration />} />
									</Route>
								</Route>
							</Route>
						</Route>
						<Route path='*' element={<Error />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default RootView;
