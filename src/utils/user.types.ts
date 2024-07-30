import { Company } from '@utils/company.types.ts';
import { Menu } from '@utils/menu.types.ts';
import { Rol } from '@utils/rol.types.ts';

export interface User {
	company: Company[];
	createdAt: Date;
	email: string;
	menus: Menu[];
	name: string;
	networkuser: string;
	rol: Rol;
	status: boolean;
	updatedAt: Date;
	uuid: string;
}
