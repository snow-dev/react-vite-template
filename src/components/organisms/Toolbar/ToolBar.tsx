import { Avatar, Box, Stack } from '@mui/material';
import { VerifiedUser } from '@mui/icons-material';
import styled from '@emotion/styled';

import Title from '@atoms/title/Title.tsx';

const StyledContainer = styled(Box)`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	padding: 0 1rem;
	align-items: center;

	@media (min-width: 768px) {
	}
`;

const ToolBar = () => (
	<StyledContainer>
		<Stack direction='row'>
			<Avatar color='warning'>IN</Avatar>
			<Title title={'Influx'} variant='h4' />
		</Stack>

		<Box>
			<Avatar>
				<VerifiedUser />
			</Avatar>
		</Box>
	</StyledContainer>
);

export default ToolBar;
