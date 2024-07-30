import { Controller, UseFormRegister } from 'react-hook-form';
import { FC } from 'react';

import { css, SerializedStyles } from '@emotion/react';
import CancelIcon from '@mui/icons-material/Cancel';
import { Chip, FormControl, InputLabel, MenuItem, OutlinedInput, Select, Stack, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

import ChipLoader from '@atoms/loaders/chip-loader.tsx';

import { CatalogValue } from '../../../utils/types.ts';

interface FormSelectProps {
	control: any;
	defaultValue?: any;
	inputSize?: 'small' | 'medium';
	label: string;
	loading: boolean;
	name: string;
	onSetValue: (value: string[]) => void;
	options: CatalogValue[];
	register: UseFormRegister<any>;
	required?: boolean;
	selectedOptions?: string[];
	showChips?: boolean;
	styles?: SerializedStyles[];
}

const MultipleSelect: FC<FormSelectProps> = ({
	label,
	control,
	inputSize = 'medium',
	loading,
	name,
	onSetValue,
	options,
	register,
	required = false,
	selectedOptions,
	showChips = true,
}) => {
	const onRemoveOption = (value: string) => {
		const newSelectedOptions = selectedOptions?.filter((option) => option !== value);
		if (newSelectedOptions) onSetValue(newSelectedOptions);
	};

	return (
		<FormControl sx={{ width: '100%' }}>
			<InputLabel>{label}</InputLabel>

			<Controller
				name={name}
				control={control}
				render={({ field: { onChange } }) => (
					<Select
						{...register(name, { required })}
						value={selectedOptions}
						onChange={onChange}
						multiple
						size={inputSize}
						input={<OutlinedInput label={label} />}
						renderValue={(selected) => {
							if (showChips) {
								return (
									<Stack
										css={css`
											flex-direction: row;
											flex-wrap: wrap;
										`}
									>
										{loading && <ChipLoader inputSize='small' />}

										{selected.map((value) => (
											<Chip
												key={value}
												label={value}
												onDelete={() => onRemoveOption(value)}
												css={css`
													width: fit-content;
													margin: 2px 5px;
													//color: #f9f9f9;
												`}
												color='secondary'
												size={inputSize}
												deleteIcon={<CancelIcon onMouseDown={(e) => e.stopPropagation()} color={'primary'} />}
											/>
										))}
									</Stack>
								);
							}
						}}
					>
						{options &&
							options?.map((option: CatalogValue) => (
								<MenuItem key={option.value} value={option.value} sx={{ justifyContent: 'space-between' }}>
									<Typography color='secondary' variant='body2'>
										{option.name}
									</Typography>
									{selectedOptions?.includes(option.value as string) ? <CheckIcon color='info' /> : null}
								</MenuItem>
							))}
					</Select>
				)}
			/>
		</FormControl>
	);
};
export { MultipleSelect };
