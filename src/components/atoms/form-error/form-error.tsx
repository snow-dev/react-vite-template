import { FC, ReactElement } from 'react';
import { FieldError } from 'react-hook-form';

import { Typography } from '@mui/material';

interface Props {
	error?: FieldError | null;
}

const FormError: FC<Props> = ({ error }): ReactElement | null => {
	if (!error) return null;

	return (
		<Typography variant='caption' color='error'>
			{error.message}
		</Typography>
	);
};

export default FormError;
