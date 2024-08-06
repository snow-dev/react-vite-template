import { FC, ReactElement } from 'react';

import { Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import styled from '@emotion/styled';

interface Props {
	text: string;
	type?: 'button' | 'submit' | 'reset' | undefined;
	variant?: 'contained' | 'text' | 'outlined';
}

const BlackButton: FC<Props> = ({ text, type = 'button', variant }): ReactElement => {
	const theme = useTheme();

	const SubmitButton = styled(Button)`
		margin-left: 1rem;
		place-self: flex-end;
		background-color: ${theme.palette.primary.dark};
		color: ${theme.palette.grey[200]};
		width: 10rem;
	`;

	return (
		<SubmitButton type={type} variant={variant}>
			{text}
		</SubmitButton>
	);
};

export default BlackButton;
