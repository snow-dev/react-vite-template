export interface Rol {
	createdAt: Date;
	name: string;
	schema_json_string: string;
	updatedAt: Date;
	uuid: string;
}

export const fakeRolOptions = {
	createdAt: new Date(),
	name: 'fakeRol',
	schema_json_string: 'fakeSchema',
	updatedAt: new Date(),
	uuid: 'fakeUuid',
};
