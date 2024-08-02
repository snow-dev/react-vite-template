import { Box } from '@mui/material';
import styled from '@emotion/styled';

import Filters from '@organisms/Filters/Filters.tsx';
import DownloadFiles from '@organisms/DownloadFiles/DownloadFiles.tsx';
import UploadFiles from '@organisms/UploadFiles/UploadFiles.tsx';
import ValidationIssues from '@organisms/ValidationIssues/ValidationIssues.tsx';

const Container = styled(Box)`
	display: flex;
	flex-direction: column;

	height: 100vh;
	width: 100%;
`;

const UploadDownload = styled(Box)`
	display: grid;
	grid-template-columns: 48% 48%;
	grid-column-gap: 1rem;
	grid-row-gap: 1rem;

	justify-content: center;
`;

const Home = () => (
	<Container>
		<Filters />
		<UploadDownload>
			<DownloadFiles />
			<UploadFiles />
			<ValidationIssues issues={[]} />
		</UploadDownload>
	</Container>
);

export default Home;
