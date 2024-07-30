import { useRouteError } from 'react-router-dom';

import { Box, Typography } from '@mui/material';

export default function Error() {
	const error: any = useRouteError();

	return (
		<Box id='errorapge'>
			<Typography variant='h4'>Oops!</Typography>
			<Typography variant='subtitle1'>Sorry, an unexpected error has occurred.</Typography>
			<Typography variant='body2'>
				<i>{error.statusText || error.message}</i>
			</Typography>
		</Box>
	);
}
