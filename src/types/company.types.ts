import { Option } from './menu.types.ts';
import { User } from './user.types.ts';

export interface Company {
	country: string;
	createdAt: Date;
	divisions: string;
	menus: Option[];
	name: string;
	updatedAt: Date;
	users: User[];
	uuid: string;
}

export const fakeCompany = (): Company => ({
	country: 'fakeCountry',
	createdAt: new Date(),
	divisions: 'fakeDivisions',
	menus: [{} as Option],
	name: 'fakeCompany',
	updatedAt: new Date(),
	users: [{} as User],
	uuid: 'fakeUuid',
});
