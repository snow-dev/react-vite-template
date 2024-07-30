import styled from '@emotion/styled';
import { ButtonBase, Toolbar } from '@mui/material';

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 3rem;
	width: 100%;
`;

export const StyledToolbar = styled(Toolbar)`
	width: 100%;
`;

export const ItemContainer = styled.div`
	margin: 0 1rem 0 0;
	place-self: center;
	align-self: center;
	width: auto;
`;

export const StyledButtonBase = styled(ButtonBase)<{ active: boolean }>`
	border-radius: 0;
	padding-left: 10px;
	background-color: transparent;
	border: none;
	height: 3rem;
	width: auto;
	${({ active }) => active && 'text-decoration: underline;'}
`;
