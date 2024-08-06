import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';

import styled from '@emotion/styled';

import Navbar from '@organisms/Navbar/Navbar.tsx';
import ToolBar from '@organisms/Toolbar/ToolBar.tsx';
import Options from '@organisms/Options/Options.tsx';

import { greyColors } from '../../assets/theme/theme.ts';

const StyledRoot = styled(Box)`
	display: grid;
	grid-template-areas:
		'toolbar toolbar toolbar toolbar'
		'navbar container container options'
		'navbar container container options';
	grid-template-columns: 2fr 4fr 4fr 2fr;
	grid-template-rows: 3rem 1fr 1fr;
	height: 100vh;
	width: 100%;
	background-color: ${greyColors[200]};
`;

const StyledToolBar = styled(Box)`
	grid-area: toolbar;

	display: flex;
	flex-direction: row;
	width: 100%;
	height: 3rem;
	background-color: ${greyColors[700]};

	@media (min-width: 768px) {
	}
`;

const StyledOutlet = styled(Box)`
	grid-area: container;

	display: flex;
	width: 100%;
	height: 100vh;
	margin-top: 1rem;
	padding: 0 1rem 0 1rem;

	@media (min-width: 768px) {
		height: 100vh;
		width: 100%;
	}
`;

const StyledNavbar = styled(Box)`
	grid-area: navbar;

	display: flex;
	width: 100%;
	height: 100vh;

	flex-direction: column;

	background-color: ${greyColors[700]};

	@media (min-width: 810px) {
		width: 100%;
	}
`;

const StyledMenu = styled(Box)`
	display: flex;
	flex-direction: row;
	margin-top: 1rem;
`;

const RootContainer: FC = () => (
	<StyledRoot>
		<StyledToolBar>
			<ToolBar />
		</StyledToolBar>

		<StyledNavbar>
			<Navbar />
		</StyledNavbar>

		<StyledOutlet>
			<Outlet />
		</StyledOutlet>

		<StyledMenu>
			<Options />
		</StyledMenu>
	</StyledRoot>
);
export default RootContainer;
