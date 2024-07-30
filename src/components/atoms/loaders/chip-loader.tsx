import { FC } from 'react';

import { Chip, CircularProgress } from '@mui/material';

interface Props {
	inputSize?: 'small' | 'medium';
}

const ChipLoader: FC<Props> = ({ inputSize = 'medium' }) => (
	<Chip
		sx={{
			margin: '2px 5px',
			width: 'fit-content',
		}}
		size={inputSize}
		avatar={<CircularProgress size='small' color='info' />}
		label='Loading...'
	/>
);

export default ChipLoader;
