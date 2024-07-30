import { FC, Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Typography } from '@mui/material';

import { Container, ItemContainer, StyledButtonBase, StyledOptions } from '@organisms/Navbar/Navbar.styled.ts';

interface MenuOption {
	active?: boolean;
	id: number;
	name: string;
	route: string;
	visible: boolean;
}

const companies: MenuOption[] = [
	{
		active: false,
		id: 0,
		name: 'Imbera Mexico',
		route: '/imbera-mexico',
		visible: true,
	},
	{
		active: false,
		id: 1,
		name: 'PTM',
		route: '/ptm',
		visible: true,
	},
	{
		active: false,
		id: 2,
		name: 'Imbera Colombia',
		route: '/imbera-colombia',
		visible: true,
	},
];

const modules: MenuOption[] = [
	{
		active: false,
		id: 0,
		name: 'Rentabilidad',
		route: '/rentability',
		visible: true,
	},
	{
		active: false,
		id: 1,
		name: 'Finanzas',
		route: '/finances',
		visible: true,
	},
	{
		active: false,
		id: 2,
		name: 'Consolidación',
		route: '/consolidation',
		visible: true,
	},
];

const escenarios: MenuOption[] = [
	{
		active: false,
		id: 0,
		name: 'Real',
		route: '/real',
		visible: true,
	},
	{
		active: false,
		id: 1,
		name: 'Presupuesto',
		route: '/budget',
		visible: true,
	},
	{
		active: false,
		id: 2,
		name: 'Rolling',
		route: '/rolling',
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

	const [activeCompany, setActiveCompany] = useState<number>(-1);
	const [activeModule, setActiveModule] = useState<number>(-1);
	const [activeEscenarios, setActiveEscenarios] = useState<number>(-1);

	useEffect(() => {
		if (activeCompany > -1) {
			let path = companies[activeCompany].route;
			if (activeModule > -1) path += modules[activeModule].route;
			if (activeEscenarios > -1) path += escenarios[activeEscenarios].route;

			navigate(path);
		}
	}, [navigate, activeCompany, activeModule, activeEscenarios]);

	const handleItemClick = (setActive: (id: number) => void, id: number, level: LEVEL) => {
		if (level === LEVEL.COMPANY) {
			setActiveCompany(id);
			setActiveModule(-1);
			setActiveEscenarios(-1);
		} else if (level === LEVEL.MODULE) {
			setActiveModule(id);
			setActiveEscenarios(-1);
		} else if (level === LEVEL.ESCENARIO) setActive(id);
	};

	const composeItem = (item: MenuOption, level: LEVEL, setActive: (itemId: number) => void, active: number) => (
		<ItemContainer key={item.id}>
			<StyledButtonBase
				active={(active === item.id).toString()}
				onClick={() => handleItemClick(setActive, item.id, level)}
			>
				<Typography
					color={active === item.id ? 'secondary' : 'common.white'}
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
		items.map((item: MenuOption) => (
			<Fragment key={item.name}>{composeItem(item, level, setActive, activeEscenarios)}</Fragment>
		));

	const composeModules = (items: MenuOption[], level: LEVEL, setActive: (itemId: number) => void) =>
		items.map((item: MenuOption) => (
			<Fragment key={item.id}>
				{composeItem(item, level, setActive, activeModule)}
				{activeModule === item.id && composeEscenarios(escenarios, LEVEL.ESCENARIO, setActiveEscenarios)}
			</Fragment>
		));

	return (
		<Container>
			<StyledOptions>
				{companies.map((item) => (
					<Box>
						{composeItem(item, LEVEL.COMPANY, setActiveCompany, activeCompany)}
						{activeCompany === item.id && composeModules(modules, LEVEL.MODULE, setActiveModule)}
					</Box>
				))}
			</StyledOptions>
		</Container>
	);
};

export default Navbar;
