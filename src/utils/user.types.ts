import { Option } from '@utils/menu.types.ts';
import { fakeRolOptions, Rol } from '@utils/rol.types.ts';
import { fakeCompany } from '@utils/company.types.ts';

export interface User {
	company: any;
	createdAt: Date;
	email: string;
	menus: Option[];
	name: string;
	networkuser: string;
	rol: Rol;
	status: boolean;
	updatedAt: Date;
	uuid: string;
}

export const fakeUser = (): User => ({
	company: fakeCompany(),
	createdAt: new Date(),
	email: 'fakeEmail',
	menus: [{} as Option],
	name: 'fakeUser',
	networkuser: 'fakeNetworkuser',
	rol: fakeRolOptions,
	status: true,
	updatedAt: new Date(),
	uuid: 'fakeUuid',
});
