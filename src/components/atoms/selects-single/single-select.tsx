import { Controller, UseFormRegister } from 'react-hook-form';
import { FC } from 'react';

import { SerializedStyles } from '@emotion/react';
import { FormControl, InputLabel, MenuItem, OutlinedInput, Select, Typography } from '@mui/material';

import { CatalogValue } from '../../../utils/types.ts';

interface Props {
	control: any;
	defaultValue?: any;
	inputSize?: 'small' | 'medium';
	label: string;
	name: string;
	options: CatalogValue[];
	register: UseFormRegister<any>;
	required?: boolean;
	styles?: SerializedStyles[];
}

const SingleSelect: FC<Props> = ({
	control,
	inputSize = 'medium',
	label,
	name,
	options,
	register,
	required = false,
}) => (
	<FormControl css={{ width: '100%' }}>
		<InputLabel>{label}</InputLabel>

		<Controller
			render={({ field: { onChange, value } }) => (
				<Select
					{...register(name, { required: required })}
					onChange={onChange}
					value={value}
					size={inputSize}
					input={<OutlinedInput label={label} />}
				>
					{options.map((option: CatalogValue) => (
						<MenuItem key={option.value} value={option.value}>
							<Typography color='secondary' variant='body2'>
								{option.name}
							</Typography>
						</MenuItem>
					))}
				</Select>
			)}
			name={name}
			control={control}
		/>
	</FormControl>
);

export default SingleSelect;
