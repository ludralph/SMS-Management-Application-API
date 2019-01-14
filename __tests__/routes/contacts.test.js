/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../src/app');

describe('GET /contacts', async () => {
  test('It responds with an array of contacts', async (done) => {
    const response = await request(app).get('/api/v1/contacts');
    expect(response.body.data.length).toBe(0);
    expect(response.statusCode).toBe(200);
    done();
  });
});
