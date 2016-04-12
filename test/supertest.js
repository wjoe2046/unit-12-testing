const request = require('supertest');
// Start server
const app = require('../');

const PORT = process.env.PORT || 3000;
const HOST = `http://localhost:${PORT}`;

/**
* include an assertion library here if you need to make assertions not provided by
* supertest
*/
// const expect = require('expect');
// const expect = require('chai').expect;
// const assert = require('chai').assert;

describe('Route integration', () => {
  describe('/', () => {
    it('GET /', done => {
      request(HOST)
        .get('/')
        .expect('Content-Type', 'text/html; charset=utf-8')
        .expect(200, done);
    });
  });

  describe('/games', () => {
    xit('GET /games', () => {
      // TODO: test /games
    });

    xit('POST /games with valid data', () => {
      // TODO:
    });

    xit('POST /games with invalid data', () => {
      // TODO: if the body of a POST to /games has extra fields or does not provide
      // the winner field, 
    });
  });
});
