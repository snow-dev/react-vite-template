import { Company } from '@utils/company.types.ts';
import { Query } from '@utils/query.types.ts';
import { User } from '@utils/user.types.ts';
import { Validation } from '@utils/validation.types.ts';

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
