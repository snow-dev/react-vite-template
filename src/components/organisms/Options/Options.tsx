import { FC, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Box, List } from '@mui/material';

import Title from '@atoms/title/Title.tsx';
import OptionItem from '@atoms/option-item/option-item.tsx';

import { useAppDispatch } from '../../../store/hooks.ts';
import { setRoute } from '../../../store/slices/navigationSlice.ts';
import { useLazyGetOptionsQuery } from '../../../store/services/option.service.ts';

const Options: FC = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const dispatch = useAppDispatch();

	const [getOptions, { data: menuOptions, isLoading }] = useLazyGetOptionsQuery();

	const [selected, setSelected] = useState<string>('');

	useEffect(() => {
		const segments = location.pathname.split('/').filter((chunk: string) => chunk !== '');

		if (segments.length < 3) setSelected('');

		if (segments[2] !== undefined && segments[3] !== selected) {
			segments[3] = selected;
			const path = segments.join('/');
			navigate(path);
			dispatch(setRoute(path));
			getOptions();
		}
	}, [dispatch, location.pathname, navigate, selected]);

	return (
		<Box>
			<Title title={'Options'} variant='h6' />

			{menuOptions && !isLoading && (
				<List>
					{menuOptions.map((menu) => (
						<OptionItem key={menu.uuid} item={menu} optionFocused={selected} setValue={setSelected} />
					))}
				</List>
			)}
		</Box>
	);
};

export default Options;
