import { FC } from 'react';

import { ListItem, ListItemButton, Typography } from '@mui/material';

import styled from '@emotion/styled';

import { Option } from '@utils/menu.types.ts';

interface OptionItemProps {
	item: Option;

	optionFocused: string;
	setValue: (value: string) => void;
}

interface ListItemProps {
	focused: boolean;
}

const StyledListItem = styled(ListItem)<ListItemProps>`
	${({ focused }) =>
		focused &&
		`
    background-color: rgba(245, 245, 245, 0.2);
  `}
`;

const OptionItem: FC<OptionItemProps> = ({ optionFocused, item, setValue }) => (
	<StyledListItem focused={optionFocused === item.uuid}>
		<ListItemButton onClick={() => setValue(item.uuid)}>
			<Typography variant='subtitle2' color='secondary'>
				{item.name}
			</Typography>
		</ListItemButton>
	</StyledListItem>
);

export default OptionItem;
