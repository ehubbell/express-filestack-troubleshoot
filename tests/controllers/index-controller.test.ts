import { expect, test } from '@jest/globals';
import { api } from 'tests/kits';

describe('index-controller', () => {
	beforeAll(async () => {});

	test('get /', async () => {
		const response = await api.query({ url: '/' });
		expect(response.status).toBe(200);
	});

	afterAll(async () => {});
});
