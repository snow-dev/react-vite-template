import { FC, SyntheticEvent, useState } from 'react';
import { Control, Controller, FieldValues, UseFormRegister } from 'react-hook-form';

import { css } from '@emotion/react';
import { Box, useTheme, Autocomplete, TextField, ListItem, Chip } from '@mui/material';

import { SelectOption } from '@utils/types.ts';

interface AutocompleteProps<T extends FieldValues> {
	control: Control<T>;
	getOptionLabel: (option: T) => string;
	id: string;
	inputSize?: 'small' | 'medium';
	label: string;
	multiple?: boolean;
	options: T[];
	register: UseFormRegister<T>;
}

const ControlledAutoComplete: FC<AutocompleteProps<any>> = ({
	multiple = false,
	control,
	id,
	options,
	getOptionLabel,
	label,
	inputSize = 'small',
}) => {
	const theme = useTheme();
	const styles = atomStyles();
	const [inputValue, setInputValue] = useState<string>('');

	return (
		<Box css={styles.container}>
			<Controller
				name={id as 'label'}
				control={control}
				render={({ field }) => (
					<Autocomplete
						{...field}
						id={id}
						multiple={multiple}
						freeSolo
						size={inputSize}
						disablePortal={true}
						value={
							multiple
								? options.filter((option) =>
										Array.isArray(field.value) ? field.value.includes(getOptionLabel(option)) : false,
									)
								: options.find((option) => getOptionLabel(option) === field.value) || null
						}
						onChange={(
							_event: SyntheticEvent<Element, Event>,
							newValue: string | SelectOption | (string | SelectOption)[] | null,
						) => {
							if (multiple) {
								if (Array.isArray(newValue)) {
									const values = newValue.map((value) => (typeof value === 'string' ? value : value.value));
									field.onChange(values);
								}
							} else {
								if (typeof newValue === 'string') {
									field.onChange(newValue);
								} else if (newValue) {
									if ('value' in newValue) {
										field.onChange(newValue.value);
									}
								}
							}
						}}
						getOptionLabel={(option: string | SelectOption) =>
							typeof option === 'string' ? option : getOptionLabel(option)
						}
						inputValue={inputValue}
						onInputChange={(_event: any, newInputValue: string) => setInputValue(newInputValue)}
						options={options}
						renderInput={(params) => <TextField {...params} label={label} />}
						renderOption={(props, option: SelectOption) => (
							<ListItem {...props} style={{ color: theme.palette.text.secondary }}>
								{getOptionLabel(option)}
							</ListItem>
						)}
						renderTags={(value: SelectOption[], getTagProps) =>
							value.map((option: SelectOption, index: number) => (
								<Chip color='secondary' size='small' label={getOptionLabel(option)} {...getTagProps({ index })} />
							))
						}
						autoHighlight={true}
					/>
				)}
			/>
		</Box>
	);
};

export default ControlledAutoComplete;

const atomStyles = () => ({
	container: css`
		width: 100%;
	`,
});
