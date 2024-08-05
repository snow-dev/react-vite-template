import { useNavigate } from 'react-router-dom';

import { Avatar, Box, IconButton, Stack } from '@mui/material';
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

const StyledAvatar = styled(Avatar)`
	width: 32px;
	height: 32px;
`;

const ToolBar = () => {
	const navigate = useNavigate();

	return (
		<StyledContainer>
			<Stack direction='row'>
				<StyledAvatar color='warning'>IN</StyledAvatar>
				<Title title={'Influx'} variant='h4' />
			</Stack>

			<Box>
				<IconButton size='small' onClick={() => navigate('/administration')}>
					<StyledAvatar>
						<VerifiedUser fontSize='small' />
					</StyledAvatar>
				</IconButton>
			</Box>
		</StyledContainer>
	);
};

export default ToolBar;
