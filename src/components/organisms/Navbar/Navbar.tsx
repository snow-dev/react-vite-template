import { FC, Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Box, Typography } from '@mui/material';

import { Container, ItemContainer, StyledButtonBase, StyledOptions } from '@organisms/Navbar/Navbar.styled.ts';
import { MenuOption } from '@utils/types.ts';

import { selectRoute, setRoute } from '../../../store/slices/navigationSlice.ts';
import { useAppSelector } from '../../../store/hooks.ts';
import { useLazyGetCompaniesQuery } from '../../../store/services/company.service.ts';

const modules: MenuOption[] = [
	{
		active: false,
		name: 'Rentabilidad',
		route: '/rentability',
		uuid: '0',
		visible: true,
	},
	{
		active: false,
		name: 'Finanzas',
		route: '/finances',
		uuid: '1',
		visible: true,
	},
	{
		active: false,
		name: 'Consolidación',
		route: '/consolidation',
		uuid: '2',
		visible: true,
	},
];

const escenarios: MenuOption[] = [
	{
		active: false,
		name: 'Real',
		route: '/real',
		uuid: '0',
		visible: true,
	},
	{
		active: false,
		name: 'Presupuesto',
		route: '/budget',
		uuid: '1',
		visible: true,
	},
	{
		active: false,
		name: 'Rolling',
		route: '/rolling',
		uuid: '2',
		visible: true,
	},
];

enum LEVEL {
	COMPANY,
	MODULE,
	ESCENARIO,
}

const Navbar: FC = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [activeCompany, setActiveCompany] = useState<number>(-1);
	const [activeModule, setActiveModule] = useState<number>(-1);
	const [activeEscenarios, setActiveEscenarios] = useState<number>(-1);

	// const state = useAppSelector((state) => state);
	const route = useAppSelector(selectRoute);

	const [getCompanies, { data: companies }] = useLazyGetCompaniesQuery();

	useEffect(() => {
		if (companies)
			if (activeCompany !== -1) {
				let path = companies[activeCompany].route;
				if (activeModule > -1) path += modules[activeModule].route;
				if (activeEscenarios > -1) path += escenarios[activeEscenarios].route;
				dispatch(setRoute(path));
			}
	}, [navigate, activeCompany, activeModule, activeEscenarios, companies, dispatch]);

	useEffect(() => {
		navigate(route);
		getCompanies();
	}, [getCompanies, navigate, route]);

	const handleItemClick = (setActive: (id: number) => void, level: LEVEL, index: number) => {
		if (level === LEVEL.COMPANY) {
			setActiveCompany(index);
			setActiveModule(-1);
			setActiveEscenarios(-1);
		} else if (level === LEVEL.MODULE) {
			setActiveModule(index);
			setActiveEscenarios(-1);
		} else if (level === LEVEL.ESCENARIO) setActive(index);
	};

	const composeItem = (
		item: MenuOption,
		level: LEVEL,
		setActive: (itemId: number) => void,
		active: number,
		index: number,
	) => (
		<ItemContainer key={item.uuid}>
			<StyledButtonBase active={(active === index).toString()} onClick={() => handleItemClick(setActive, level, index)}>
				<Typography
					color={active === index ? 'secondary' : 'common.white'}
					fontSize='large'
					fontWeight='bold'
					marginLeft={`${level}rem`}
				>
					{item.name}
				</Typography>
			</StyledButtonBase>
		</ItemContainer>
	);

	const composeEscenarios = (items: MenuOption[], level: LEVEL, setActive: (itemId: number) => void) =>
		items.map((item: MenuOption, index: number) => (
			<Fragment key={item.name}>{composeItem(item, level, setActive, activeEscenarios, index)}</Fragment>
		));

	const composeModules = (items: MenuOption[], level: LEVEL, setActive: (itemId: number) => void) =>
		items.map((item: MenuOption, index: number) => (
			<Fragment key={item.uuid}>
				{composeItem(item, level, setActive, activeModule, index)}
				{activeModule === index && composeEscenarios(escenarios, LEVEL.ESCENARIO, setActiveEscenarios)}
			</Fragment>
		));

	const composeCompanies = () => {};
	if (companies)
		return companies.map((item: MenuOption, index: number) => (
			<Box>
				{composeItem(item, LEVEL.COMPANY, setActiveCompany, activeCompany, index)}
				{activeCompany === index && composeModules(modules, LEVEL.MODULE, setActiveModule)}
			</Box>
		));

	return (
		<Container>
			<StyledOptions>{companies && composeCompanies()}</StyledOptions>
		</Container>
	);
};

export default Navbar;
