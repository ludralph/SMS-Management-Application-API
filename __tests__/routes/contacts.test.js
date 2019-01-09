/* eslint-disable no-undef */
// we will use supertest to test HTTP requests/responses
const request = require("supertest");
// we also need our app for the correct routes!
const app = require('../../src/app');

describe('GET /contacts', () => {
  test('It responds with an array of contacts', async () => {
    const response = await request(app).get('/api/v1/contacts');
    expect(response.body.data.length).toBe(1);
    expect(response.statusCode).toBe(200);
  });
});