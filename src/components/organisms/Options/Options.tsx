import { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Box, Card, List } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import styled from '@emotion/styled';

import OptionItem from '@atoms/option-item/option-item.tsx';
import AutoComplete from '@atoms/autocomplete/autocomplete.tsx';

import { useAppDispatch } from '@hooks/hooks.ts';
import { optionService, useLazyGetOptionsQuery } from '@services/option.service.ts';
import { setRoute } from '@slices/navigationSlice.ts';

import { CatalogValue } from '@utils/types.ts';

const Options: FC = () => {
	const theme = useTheme();
	const location = useLocation();
	const dispatch = useAppDispatch();

	const [getOptions, { data: menuOptions, isLoading, isSuccess }] = useLazyGetOptionsQuery();

	const [selected, setSelected] = useState<string>('');

	useEffect(() => {
		const segments = location.pathname.split('/').filter((chunk: string) => chunk !== '');
		if (segments.length < 4) {
			setSelected('');
			dispatch(setRoute(segments[0]));
			dispatch(optionService.util.invalidateTags([{ id: 'LIST', type: 'options' }]));
		}

		if (segments[3] !== undefined && segments) {
			segments[4] = selected;

			const path = segments.join('/');
			dispatch(setRoute(path));
		}

		if (segments[3] !== '' && !isSuccess && selected === '') {
			getOptions();
		}
	}, [dispatch, getOptions, isSuccess, location.pathname, selected]);

	useEffect(() => {
		if (menuOptions && !isLoading) {
			if (menuOptions.length === 1) {
				setSelected(menuOptions[0].uuid);
			}
		}
	}, [menuOptions, isLoading]);
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
