import { User } from '@utils/user.types.ts';

import { Menu } from './menu.types.ts';

export interface Company {
	country: string;
	createdAt: Date;
	divisions: string;
	menus: Menu[];
	name: string;
	updatedAt: Date;
	users: User[];
	uuid: string;
}
