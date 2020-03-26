const request = require('supertest');
const server = require('./server');

describe('server.js', () => {
	describe('GET /', () => {
		// using async, await to check the get to /
		it('returns 200 OK', async () => {
			const response = await request(server).get('/');

			expect(response.status).toBe(200);
		});
		// using a return of a promise to check the get to /
		it('returns JSON as response', () => {
			return request(server)
				.get('/')
				.then(res => {
					expect(res.type).toMatch(/json/i);
				});
		});
		it('returns an object with key: up', () => {
			return request(server)
				.get('/')
				.then(res => {
					expect(res.body.api).toBe('up');
				});
		});
	});
});
