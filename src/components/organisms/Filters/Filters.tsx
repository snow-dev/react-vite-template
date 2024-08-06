import { FC, ReactElement } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FilterForm, filterSchema } from '@schemas/filter.schema.ts';
import { yupResolver } from '@hookform/resolvers/yup';

import { Box, Card } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import styled from '@emotion/styled';

import ControlledAutoComplete from '@atoms/controlled-autocomplete/controlled-auto-complete.tsx';
import FormError from '@atoms/form-error/form-error.tsx';
import BlackButton from '@atoms/Button/BlackButton.tsx';

const Filters: FC = (): ReactElement => {
	const theme = useTheme();
	const {
		register,
		// watch,
		formState: { errors },
		control,
		// setValue,
		handleSubmit,
	} = useForm<FilterForm>({
		resolver: yupResolver(filterSchema),
	});

	const Container = styled(Card)`
		display: flex;
		flex-direction: column;
		height: 3.5rem;
		width: 98%;
		background-color: ${theme.palette.grey[100]};
		align-self: center;

		margin-bottom: 1.5rem;
	`;

	const StyledForm = styled.form`
		display: flex;
		flex-direction: row;
		align-items: center;
		place-content: space-between;
		height: 100%;
		width: 100%;
	`;

	const AutocompletesContainer = styled(Box)`
		display: flex;
		flex-direction: row;
		width: 75%;
		height: 100%;
		align-items: center;
		place-content: space-between;
	`;

	const AutocompleteBox = styled(Box)`
		display: flex;
		flex-direction: row;
		max-width: 20rem;
		width: 10rem;
		margin-left: 1rem;
	`;

	const SubmitBox = styled(Box)`
		display: flex;
		place-content: flex-end;
		flex-direction: row;
		width: 25rem;
		padding-right: 2rem;
	`;

	const onSubmit: SubmitHandler<FilterForm> = async (data) => {
		console.debug('data: ', data);
	};

	return (
		<Container>
			<StyledForm onSubmit={handleSubmit(onSubmit)}>
				<AutocompletesContainer>
					<AutocompleteBox>
						<ControlledAutoComplete
							getOptionLabel={(option) => `${option.label} (${option.option}/${option.sa})` ?? 'N/A'}
							id='year-search'
							label='Years'
							options={[]}
							inputSize='small'
							control={control}
							register={register}
						/>
						{errors.year && <FormError error={errors.year} />}
					</AutocompleteBox>

					<AutocompleteBox>
						<ControlledAutoComplete
							getOptionLabel={(option) => `${option.label} (${option.option}/${option.sa})` ?? 'N/A'}
							id='month-search'
							label='Month'
							options={[]}
							inputSize='small'
							control={control}
							register={register}
						/>
						{errors.month && <FormError error={errors.month} />}
					</AutocompleteBox>

					<AutocompleteBox>
						<ControlledAutoComplete
							getOptionLabel={(option) => `${option.label} (${option.option}/${option.sa})` ?? 'N/A'}
							id='division-search'
							label='Division'
							options={[]}
							inputSize='small'
							control={control}
							register={register}
						/>
						{errors.division && <FormError error={errors.division} />}
					</AutocompleteBox>
				</AutocompletesContainer>

				<SubmitBox>
					<BlackButton type='submit' text='Search' />
				</SubmitBox>
			</StyledForm>
		</Container>
	);
};

export default Filters;
