import { FC, SyntheticEvent, useEffect, useState } from 'react';

import { Theme, useTheme } from '@mui/material/styles';
import { Autocomplete, Box, ListItem, TextField } from '@mui/material';
import { css } from '@emotion/react';

interface Option {
	area: string;
	label: string;
	option: number;
	sa: number;
	z_function: string;
}

interface AutocompleteProps<T> {
	getOptionLabel: (option: T) => string;
	id: string;
	inputSize?: 'small' | 'medium';
	label: string;
	options: T[];
	setExpanded: (option: T) => void;
}

const AutoComplete: FC<AutocompleteProps<any>> = ({
	id,
	options,
	setExpanded,
	getOptionLabel,
	label,
	inputSize = 'medium',
}) => {
	const theme = useTheme();
	const styles = atomStyles(theme);

	const [value, setValue] = useState<any | null>(null);
	const [inputValue, setInputValue] = useState<string>('');
	const [open, setOpen] = useState<boolean>(false);

	useEffect(() => {
		setOpen(inputValue !== '');
	}, [inputValue]);

	return (
		<Box css={styles.container}>
			<Autocomplete
				id={id}
				freeSolo
				size={inputSize}
				disablePortal
				value={value}
				open={open}
				onClose={() => setOpen(false)}
				onChange={(_event: SyntheticEvent<Element, Event>, newValue: string | Option | null) => {
					if (typeof newValue === 'string') {
						// Manejar el caso en que newValue es un string
						// Posiblemente establecer un nuevo Option basado en el string
					} else {
						// Manejar el caso en que newValue es un Option o null
						setValue(newValue);
						setInputValue('');
						setExpanded(setExpanded(newValue));
					}
					setOpen(false);
				}}
				getOptionLabel={(option) => getOptionLabel(option)}
				inputValue={inputValue}
				onInputChange={(_event: any, newInputValue: string) => setInputValue(newInputValue)}
				options={options}
				renderInput={(params) => <TextField {...params} label={label} />}
				onBlur={() => setInputValue('')}
				renderOption={(props, option) => (
					<ListItem {...props} css={styles.renderOption}>
						{getOptionLabel(option)}
					</ListItem>
				)}
			/>
		</Box>
	);
};

export default AutoComplete;

const atomStyles = (theme: Theme) => ({
	container: css`
		margin: 1rem 0 1rem 0;
		width: 100%;
	`,

	renderOption: css`
		color: ${theme.palette.text.secondary};
		background-color: ${theme.palette.grey[300]};
	`,
});
