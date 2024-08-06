import React, { FC, ReactNode } from 'react';

import { useTheme } from '@mui/material/styles';

import styled from '@emotion/styled';

interface Props {
	colorValue?: string;
	icon: ReactNode;
}

const IconSvg: FC<Props> = ({ icon, colorValue }) => {
	const theme = useTheme();

	const IconWrapper = styled.span`
		display: inline-flex;
		align-items: center;
		justify-content: center;

		svg {
			width: 2rem;
			height: 2rem;
			color: ${({ color }) => color || 'inherit'};
		}
	`;

	return (
		<IconWrapper theme={theme} color={colorValue}>
			{React.cloneElement(icon as React.ReactElement, {
				className: 'icon-svg',
			})}
		</IconWrapper>
	);
};

export default IconSvg;
