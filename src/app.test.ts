import request from 'supertest';

import app from './app';

describe('GET /', () => {
  it('responds with a json message', (done) => {
    request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(
        200,
        {
          message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
        },
        done,
      );
  });
});

describe('GET /invalid-route', () => {
  it('responds with a not found message', (done) => {
    request(app)
      .get('/invalid-route')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404, done);
  });
});
