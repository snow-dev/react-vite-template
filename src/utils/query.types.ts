export interface Query {
	createdAt: Date;
	name: string;
	query: string;
	updatedAt: Date;
	uuid: string;
}

export const fakeQueryOptions = {
	createdAt: new Date(),
	name: 'fakeQuery',
	query: 'fakeQuery',
	updatedAt: new Date(),
	uuid: 'fakeUuid',
};
