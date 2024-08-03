import { FC, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Box, Card, List } from '@mui/material';
import styled from '@emotion/styled';
import { useTheme } from '@mui/material/styles';

import OptionItem from '@atoms/option-item/option-item.tsx';
import AutoComplete from '@atoms/autocomplete/autocomplete.tsx';
import { CatalogValue } from '@utils/types.ts';

import { useAppDispatch } from '../../../store/hooks.ts';
import { setRoute } from '../../../store/slices/navigationSlice.ts';
import { optionService, useLazyGetOptionsQuery } from '../../../store/services/option.service.ts';

const Options: FC = () => {
	const theme = useTheme();
	const navigate = useNavigate();
	const location = useLocation();
	const dispatch = useAppDispatch();

	const [getOptions, { data: menuOptions, isLoading }] = useLazyGetOptionsQuery();

	const [optionFocus, setOptionFocus] = useState<string>('');
	const [selected, setSelected] = useState<string>('');

	useEffect(() => {
		const segments = location.pathname.split('/').filter((chunk: string) => chunk !== '');

		if (segments.length < 3) {
			setSelected('');
			dispatch(optionService.util.invalidateTags([{ id: 'LIST', type: 'options' }]));
		}

		if (segments[2] !== undefined && segments[3] !== selected) {
			segments[3] = selected;
			const path = segments.join('/');
			navigate(path);
			dispatch(setRoute(path));
			getOptions();
		}
	}, [dispatch, getOptions, location.pathname, navigate, selected]);

	useEffect(() => {
		if (menuOptions && !isLoading) {
			if (menuOptions.length === 1) {
				setSelected(menuOptions[0].name);
			}
		}
	}, [menuOptions, isLoading]);

	useEffect(() => {
		console.log('Option focused: ', optionFocus);
	}, [optionFocus]);

	const Container = styled(Card)`
		display: flex;
		flex-direction: column;
		width: 100%;
		height: calc(100vh - 4rem);

		background-color: ${theme.palette.grey[100]};
	`;

	const SerchInput = styled(Box)`
		display: flex;
		flex-direction: row;
		place-self: center;
		align-items: center;

		width: 80%;
	`;

	return (
		<Container>
			<SerchInput>
				<AutoComplete
					id='option-search'
					options={menuOptions ?? []}
					inputSize='small'
					label='Search...'
					getOptionLabel={(option: CatalogValue) => option.name ?? 'N/A'}
					setExpanded={(option: CatalogValue) => setOptionFocus(option.name)}
				/>
			</SerchInput>

			{menuOptions && !isLoading && (
				<List>
					{menuOptions.map((menu) => (
						<OptionItem key={menu.uuid} item={menu} optionFocused={selected} setValue={setSelected} />
					))}
				</List>
			)}
		</Container>
	);
};

export default Options;
