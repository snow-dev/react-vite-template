import { ReactElement } from 'react';
import {
	Control,
	Controller,
	DeepMap,
	FieldError,
	FieldValues,
	get,
	Path,
	RegisterOptions,
	UseFormRegister,
} from 'react-hook-form';

import { SerializedStyles } from '@emotion/react';
import { Box, TextField } from '@mui/material';
import styled from '@emotion/styled';

import FormError from '../form-error/form-error.tsx';

interface InputProps {
	defaultValue?: string | number | readonly string[] | undefined;
	label: string;
	multiline?: boolean;
	name: string;
	required?: boolean;
	rows?: number;
	size: 'small' | 'medium';
	styles?: SerializedStyles[];
	type?: string;
	variant?: 'outlined' | 'standard' | 'filled';
}

export type FormInputProps<TFormValues extends FieldValues> = {
	control: Control<TFormValues>;
	errors: Partial<DeepMap<TFormValues, FieldError>>;
	name: Path<TFormValues>;
	register?: UseFormRegister<TFormValues>;
	rules: RegisterOptions<TFormValues, Path<TFormValues>>;
} & Omit<InputProps, 'name'>;

const StyledBox = styled(Box)`
	display: flex;
	flex-direction: column;
`;

const FormInput = <TFormValues extends Record<string, unknown>>({
	name,
	register,
	rules,
	errors,
	control,
	...props
}: FormInputProps<TFormValues>): ReactElement => {
	const errorMessages = get(errors, name) as FieldError | undefined;
	const hasError = !!errorMessages;

	return (
		<StyledBox css={props.styles}>
			<Controller
				name={name}
				control={control}
				render={({ field: { onChange } }) => (
					<TextField
						// css={inputStyles}
						{...(register && register(name, rules))}
						{...props}
						onChange={onChange}
						color='secondary'
						aria-invalid={hasError}
					/>
				)}
			/>

			{hasError && <FormError error={errorMessages} />}
		</StyledBox>
	);
};

export default FormInput;
