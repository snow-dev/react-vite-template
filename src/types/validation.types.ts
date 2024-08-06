export interface Validation {
	createdAt: Date;
	name: string;
	schema_json_string: string;
	updatedAt: Date;
	uuid: string;
}

export const fakeValidation = {
	createdAt: new Date(),
	name: 'fakeValidation',
	schema: 'fakeSchema',
	schema_json_string: '{fakeSchema: "fakeSchema"}',
	updatedAt: new Date(),
	uuid: 'fakeUuid',
};
