import { FC } from 'react';

import { SerializedStyles } from '@emotion/react';
import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';

interface Props {
	color?: string;
	customStyles?: SerializedStyles;
	title: string;
	variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const StyledBox = styled(Box)`
	display: flex;
	align-items: center;
	margin-left: 0.5rem;
`;

const Title: FC<Props> = ({ customStyles, title, color = 'text.primary', variant = 'h5' }) => (
	<StyledBox css={customStyles}>
		<Typography variant={variant} color={color}>
			{title}
		</Typography>
	</StyledBox>
);

export default Title;
