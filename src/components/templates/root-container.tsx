import { FC, Fragment } from 'react';

import { Box } from '@mui/material';
import { css } from '@emotion/react';
import { Outlet } from '@mui/icons-material';

import Navbar from '../organisms/Navbar.tsx';

const RootContainer: FC = () => (
	<Fragment>
		<Box css={styles.menu}>
			<Navbar />
		</Box>

		<Box css={styles.container}>
			<Outlet />
		</Box>
	</Fragment>
);

export default RootContainer;

const styles = {
	container: css`
		display: flex;
		flex-direction: column;
		border-radius: 4px;
		margin: 0 auto 1rem;

		min-width: 390px;
		width: 390px;
		height: 90vh;
		padding-top: 10vh;

		@media (min-width: 810px) {
			height: 100vh;
			width: 760px;
		}
	`,

	menu: css`
		position: fixed;
		top: 1rem;
		width: 390px;
		display: flex;
		flex-direction: row;
		align-self: flex-start;
		z-index: 10;

		@media (min-width: 810px) {
			width: 760px;
		}
	`,
};
