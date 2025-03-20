import App from 'src/app';
import supertest from 'supertest';
import { getValue } from 'tests/kits/storage-kit';

// Private
const baseUrl = process.env.TEST_DOMAIN;
const options = { key: null, cert: null };

const headers = () => {
	const auth = getValue('auth');
	return {
		Accept: 'application/json',
		Authorization: auth || null,
	};
};

// Public
export const api = {
	query: ({ url, query = '' }) => {
		const formattedURL = url + query;
		return supertest(App).get(formattedURL).set(headers());
	},
	queryRecord: ({ url, query = '' }) => {
		const formattedURL = url + query;
		return supertest(App).get(formattedURL).set(headers());
	},
	post: ({ url, query = '', data = {} }) => {
		const formattedURL = url + query;
		return supertest(App).post(formattedURL).send(data).set(headers());
	},
	update: ({ url, query = '', data = {} }) => {
		const formattedURL = url + query;
		return supertest(App).put(formattedURL).send(data).set(headers());
	},
	delete: ({ url, query = '' }) => {
		const formattedURL = url + query;
		supertest(App).delete(formattedURL).set(headers());
	},
};
