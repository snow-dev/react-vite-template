import styled from '@emotion/styled';
import { Box, ButtonBase } from '@mui/material';

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
	border-radius: 0;
	padding-left: 10px;
	background-color: transparent;
	border: none;
	height: 3rem;
	width: auto;
	${({ active }) => active === 'true' && 'text-decoration: underline;'}
`;
