import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Avatar, Box, IconButton, Link, Stack } from '@mui/material';

import { VerifiedUser } from '@mui/icons-material';

import styled from '@emotion/styled';

import Title from '@atoms/title/Title.tsx';

import { setRoute } from '@slices/navigationSlice.ts';

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

const LeftStack = styled(Stack)`
	place-content: center;
	align-items: center;
`;

const UndecoratedLink = styled(Link)`
	text-decoration: none;
	align-items: self-end;
`;

const ToolBar = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	return (
		<StyledContainer>
			<LeftStack direction='row'>
				<IconButton onClick={() => navigate('/home')}>
					<StyledAvatar color='warning'>IN</StyledAvatar>
				</IconButton>
				<UndecoratedLink href='/home'>
					<Title title={'Influx'} variant='h4' />
				</UndecoratedLink>
			</LeftStack>

			<Box>
				<IconButton onClick={() => dispatch(setRoute('/administration'))}>
					<StyledAvatar>
						<VerifiedUser fontSize='small' />
					</StyledAvatar>
				</IconButton>
			</Box>
		</StyledContainer>
	);
};

export default ToolBar;
