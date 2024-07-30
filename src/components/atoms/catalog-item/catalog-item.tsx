import { FC } from 'react';

import { css } from '@emotion/react';
import { IconButton, ListItem, ListItemSecondaryAction, Typography } from '@mui/material';
import { DeleteForever } from '@mui/icons-material';

import { CatalogValue } from '../../../utils/types.ts';

interface CatalogItemProps {
	item: CatalogValue;
	onShowDialog: () => void;
	optionFocused: string;
	setValue?: (value: string) => void;
}

const CatalogItem: FC<CatalogItemProps> = ({ optionFocused, item, onShowDialog, setValue }) => {
	const handleDelete = () => {
		if (setValue) setValue(item.name);
		onShowDialog();
	};

	return (
		<ListItem css={optionFocused === item.name ? styles.onFocus : null}>
			<Typography variant='subtitle2' color='secondary'>
				{item.name}
			</Typography>
			<ListItemSecondaryAction>
				<IconButton size='small' onClick={() => handleDelete()}>
					<DeleteForever color='error' />
				</IconButton>
			</ListItemSecondaryAction>
		</ListItem>
	);
};

export default CatalogItem;

const styles = {
	onFocus: css`
		background-color: rgba(245, 245, 245, 0.2);
	`,
};
