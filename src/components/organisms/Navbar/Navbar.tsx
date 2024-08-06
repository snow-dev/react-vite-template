import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container } from '@organisms/Navbar/Navbar.styled.ts';
import AdministrationMenu from '@organisms/Menus/Administration.tsx';
import CompaniesMenu from '@organisms/Menus/Companies.tsx';

import { useAppSelector } from '@hooks/hooks.ts';
import { selectRoute } from '@slices/navigationSlice.ts';

const Navbar: FC = () => {
	const navigate = useNavigate();
	const route = useAppSelector(selectRoute);

	useEffect(() => {
		// console.debug('Route: ', route);
		navigate(route);
	}, [navigate, route]);

	return (
		<Container>
			{route.includes('administration') && <AdministrationMenu />}
			{!route.includes('administration') && <CompaniesMenu />}
		</Container>
	);
};
export default Navbar;
