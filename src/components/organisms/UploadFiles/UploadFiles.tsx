import { FC, ReactElement } from 'react';

import { Box, Card, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { UploadFile } from '@mui/icons-material';

import styled from '@emotion/styled';

import Title from '@atoms/title/Title.tsx';
import BlackButton from '@atoms/Button/BlackButton.tsx';
import IconSvg from '@atoms/svg/IconSvg.tsx';

const UploadFiles: FC = (): ReactElement => {
	const theme = useTheme();

	const Container = styled(Card)`
		display: flex;
		flex-direction: column;
		height: 15rem;
		padding: 1rem;

		background-color: ${theme.palette.grey[100]};
	`;

	const UploadItem = styled(Box)`
		display: flex;
		flex-direction: column;

		align-items: center;
		place-content: center;

		border-radius: 10px;
		border: 2px dashed ${theme.palette.grey[200]};
		height: 20rem;

		// background-color: ${theme.palette.grey[200]};
	`;

	const ValidateButton = styled(Box)`
		display: flex;
		flex-direction: column;
		place-self: center;
		margin-top: 1rem;
	`;

	const UploadSvg = styled(UploadFile)`
		width: 2rem;
		height: 2rem;
		color: ${theme.palette.common.black};
	`;

	return (
		<Container>
			<Title title={'Upload Files'} variant='h5' color={theme.palette.primary.dark} />
			<UploadItem>
				<IconSvg icon={<UploadSvg />} colorValue={theme.palette.grey[800]} />
				<Typography variant='body2' fontWeight='bolder'>
					Arrastra & suelta el aerchivo aqui
				</Typography>

				<Typography variant='body2' fontWeight='bolder'>
					o selecciona un archivo desde el ordenador
				</Typography>
			</UploadItem>

			<ValidateButton>
				<BlackButton text='Validar' />
			</ValidateButton>
		</Container>
	);
};

export default UploadFiles;
