/* eslint-disable no-undef */
// we will use supertest to test HTTP requests/responses
const request = require('supertest');
// we also need our app for the correct routes!
const app = require('../../src/app');
const insertSeedData = require('../../seeders/seedData');
const db = require('../../models');

describe('To do before running test', () => {
  beforeAll((done) => {
    db.sequelize.sync({ force: true })
      .then(() => {
        insertSeedData();
        done();
      });
  });
});

describe('GET /contacts', async () => {
  test('It responds with an array of contacts', async (done) => {
    const response = await request(app).get('/api/v1/contacts');
    console.log('>>>>', response.body);
    expect(response.body.data.length).toBe(3);
    expect(response.statusCode).toBe(200);
    done();
  });
});
