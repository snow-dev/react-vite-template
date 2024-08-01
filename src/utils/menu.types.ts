import { faker } from '@faker-js/faker';
import { Company, fakeCompany } from '@utils/company.types.ts';
import { fakeQueryOptions, Query } from '@utils/query.types.ts';
import { fakeUser, User } from '@utils/user.types.ts';
import { fakeValidation, Validation } from '@utils/validation.types.ts';

export interface Option {
	company: Company;
	createdAt: Date;
	name: string;
	query: Query;
	sort_position: number;
	status: boolean;
	type: string;
	updatedAt: Date;
	user: User;
	uuid: string;
	validation: Validation;
}

export const fakeMenu = (): Option => ({
	company: fakeCompany(),
	createdAt: faker.date.past(),
	name: faker.company.name(),
	query: fakeQueryOptions,
	sort_position: parseInt(faker.commerce.price({ max: 100, min: 1 })),
	status: true,
	type: faker.helpers.arrayElement(['download', 'upload', 'delete']),
	updatedAt: faker.date.recent(),
	user: fakeUser(),
	uuid: faker.database.mongodbObjectId(),
	validation: fakeValidation,
});

export const fakeMenus = (times: number): Option[] => {
	const menus: Option[] = [];

	for (let i = 0; i <= times; i++) {
		menus.push(fakeMenu());
	}

	return menus;
};
