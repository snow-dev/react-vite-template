import { FC } from 'react';

import { Box, CircularProgress } from '@mui/material';
import styled from '@emotion/styled';

const StyledBox = styled(Box)`
	align-self: center;
	display: flex;
	height: 100%;
	place-items: center;
	place-self: center;
`;

const CircularLoader: FC = () => (
	<StyledBox>
		<CircularProgress />
	</StyledBox>
);

export default CircularLoader;
