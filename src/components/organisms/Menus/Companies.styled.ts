import { Box, ButtonBase } from '@mui/material';

import styled from '@emotion/styled';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	height: 100vh;
`;

export const StyledOptions = styled(Box)`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	height: 100%;
	width: 100%;
`;

export const ItemContainer = styled(Box)`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

export const StyledButtonBase = styled(ButtonBase)<{ active: string }>`
	//border-radius: 0;
	padding-left: 10px;
	background-color: transparent;
	height: 3rem;
	width: 100%;
	place-content: flex-start;

	${({ active }) => active === 'true' && 'text-decoration: none; place-content: flex-start;'}
`;
