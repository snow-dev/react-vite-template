import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AppBar, Typography } from '@mui/material';

import { Container, ItemContainer, StyledButtonBase, StyledToolbar } from '@organisms/Navbar.styled.ts';

const menuOptions = [
	{
		id: 0,
		name: 'Home',
		route: '/',
		visible: false,
	},
	{
		id: 1,
		name: 'Functions',
		route: 'list',
		visible: true,
	},
	{
		id: 2,
		name: 'Catalogs',
		route: 'catalogs',
		visible: true,
	},
];

const Navbar: FC = () => {
	const navigate = useNavigate();

	const [active, setActive] = useState<number>(0);

	useEffect(() => {
		navigate(menuOptions[active].route);
	}, [active, navigate]);

	const handleClick = (id: number) => {
		setActive(id);
		navigate(menuOptions[id].route);
	};

	return (
		<Container>
			<AppBar position='static' color='primary' enableColorOnDark>
				<StyledToolbar>
					{menuOptions.map((item) => (
						<ItemContainer key={item.id}>
							<StyledButtonBase active={active === item.id} onClick={() => handleClick(item.id)}>
								<Typography color='common.white' fontSize='large'>
									{item.name}
								</Typography>
							</StyledButtonBase>
						</ItemContainer>
					))}
				</StyledToolbar>
			</AppBar>
		</Container>
	);
};

export default Navbar;
