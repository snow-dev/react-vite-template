import { FC } from 'react';

import { useTheme } from '@mui/material/styles';
import { Box, Card, Typography } from '@mui/material';

import { Warning } from '@mui/icons-material';

import styled from '@emotion/styled';

import IconSvg from '@atoms/svg/IconSvg.tsx';

interface Props {
	issues: any[];
}

const ValidationIssues: FC<Props> = ({ issues }) => {
	const theme = useTheme();

	const Container = styled(Card)`
		grid-column: 1 / 3;

		display: flex;
		flex-direction: column;
		width: 100%;
		height: max-content;
	`;

	const Message = styled(Box)`
		display: flex;
		flex-direction: column;
		place-content: center;
		align-items: center;
		height: 48vh;
		width: 100%;
		border-bottom: 1px solid ${theme.palette.grey[200]};
		background-color: ${theme.palette.grey[100]};
	`;

	return (
		<Container>
			{issues.length === 0 && (
				<Message>
					<IconSvg icon={<Warning />} colorValue={theme.palette.grey[800]} />

					<Typography variant='caption' fontWeight='bold'>
						Los resultados de las validaciones del archivo serna mostradas ene sta sección.
					</Typography>

					<Typography variant='caption' fontWeight='bold'>
						Por favor, revise los detales a continuación
					</Typography>
				</Message>
			)}

			{issues.map((issue: any, index: number) => (
				<div key={index}>
					<div>{issue.message}</div>
					<div>{issue.path}</div>
				</div>
			))}
		</Container>
	);
};

export default ValidationIssues;
