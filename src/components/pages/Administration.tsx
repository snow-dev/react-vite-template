import { Card, useTheme } from '@mui/material';

import styled from '@emotion/styled';

const Administration = () => {
	const theme = useTheme();

	const Container = styled(Card)`
		display: flex;
		flex-direction: column;
		width: 100%;
		height: calc(100vh - 4rem);

		background-color: ${theme.palette.grey[100]};
	`;

	return (
		<Container>
			<h1>List</h1>
		</Container>
	);
};

export default Administration;
