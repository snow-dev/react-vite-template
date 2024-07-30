import { ReactElement } from 'react';

import { Box, Typography } from '@mui/material';

import '../../assets/css/App.css';

function Home(): ReactElement {
	return (
		<Box>
			<Typography variant='h4'> Home page </Typography>
		</Box>
	);
}

export default Home;
