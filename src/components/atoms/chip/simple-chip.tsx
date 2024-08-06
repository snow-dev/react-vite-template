import { FC, ReactElement } from 'react';

import { Chip } from '@mui/material';

import { SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';

interface Props {
	inputSize?: 'small' | 'medium';
	styles?: SerializedStyles;
	value: string;
}

const StyledChip = styled(Chip)`
	width: fit-content;
	margin: 5px 5px;
	color: #f9f9f9;
	height: 1rem;
	font-size: 10pt;
`;

const SimpleChip: FC<Props> = ({ styles, value, inputSize = 'small' }): ReactElement => (
	<StyledChip key={value} css={styles} label={value} color='info' size={inputSize} />
);

export default SimpleChip;
