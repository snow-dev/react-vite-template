import { FC } from 'react';

import { SerializedStyles } from '@emotion/react';
import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';

interface Props {
	color?: string;
	customStyles?: SerializedStyles;
	title: string;
}

const StyledBox = styled(Box)`
	display: flex;
	align-self: flex-start;
	margin: 1rem 0 0.5rem 0;
`;

const Title: FC<Props> = ({ customStyles, title, color = 'text.secondary' }) => (
	<StyledBox css={customStyles}>
		<Typography variant='h5' color={color}>
			{title}
		</Typography>
	</StyledBox>
);

export default Title;
