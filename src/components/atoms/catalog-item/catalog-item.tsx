import { FC } from 'react';

import { IconButton, ListItem, ListItemSecondaryAction, Typography } from '@mui/material';
import { DeleteForever } from '@mui/icons-material';
import styled from '@emotion/styled';

import { CatalogValue } from '../../../utils/types.ts';

interface CatalogItemProps {
	item: CatalogValue;
	onShowDialog: () => void;
	optionFocused: string;
	setValue?: (value: string) => void;
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

const CatalogItem: FC<CatalogItemProps> = ({ optionFocused, item, onShowDialog, setValue }) => {
	const handleDelete = () => {
		if (setValue) setValue(item.name);
		onShowDialog();
	};

	return (
		<StyledListItem focused={optionFocused === item.name}>
			<Typography variant='subtitle2' color='secondary'>
				{item.name}
			</Typography>

			<ListItemSecondaryAction>
				<IconButton size='small' onClick={() => handleDelete()}>
					<DeleteForever color='error' />
				</IconButton>
			</ListItemSecondaryAction>
		</StyledListItem>
	);
};

export default CatalogItem;
