import { FC, ReactElement } from 'react';

import { Box, Button, Card, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { SimCardDownload } from '@mui/icons-material';

import styled from '@emotion/styled';

import Title from '@atoms/title/Title.tsx';
import IconSvg from '@atoms/svg/IconSvg.tsx';

const DownloadFiles: FC = (): ReactElement => {
	const theme = useTheme();

	const Container = styled(Card)`
		display: flex;
		flex-direction: column;
		height: 15rem;
		padding: 1rem;

		background-color: ${theme.palette.grey[100]};
	`;

	const DownloadItem = styled(Box)`
		display: flex;
		flex-direction: row;
		place-content: space-between;
		margin-top: 1rem;
		margin-left: 1rem;
		align-items: center;
		padding-left: 1rem;

		border-radius: 10px;
		height: 3rem;

		background-color: ${theme.palette.grey[200]};
	`;

	const DownloadButton = styled(Button)`
		margin-left: 1rem;
		background-color: ${theme.palette.primary.dark};

		width: 3rem;
		height: 3rem;
	`;

	return (
		<Container>
			<Title title={'Download Files'} variant='h5' color={theme.palette.grey['900']} />
			<DownloadItem>
				<Typography variant='body1'>Lorem ipsum dolor sit amet 1 </Typography>
				<DownloadButton variant='contained'>
					<IconSvg icon={<SimCardDownload />} colorValue={theme.palette.common.white} />
				</DownloadButton>
			</DownloadItem>

			<DownloadItem>
				<Typography variant='body1'>Lorem ipsum dolor sit amet 1 </Typography>
				<DownloadButton variant='contained'>
					<IconSvg icon={<SimCardDownload />} colorValue={theme.palette.common.white} />
				</DownloadButton>
			</DownloadItem>
		</Container>
	);
};

export default DownloadFiles;
