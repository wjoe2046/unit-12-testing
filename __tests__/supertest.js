/* eslint arrow-body-style: 0 */
const request = require('supertest');
const server = require('../server');

/**
 * Read the docs!!!!
 * https://www.npmjs.com/package/supertest
 */
describe('Route integration', () => {
  afterAll(() => {
    // Once these tests are done, we can close down the server. (Check out
    // server/index.js. It exports the app.listen call from Express. This
    // returns a server instance, which we can shut down whenever we like.)
    server.close();
  });

  // These tests won't work unless your server is running!
  describe('/', () => {
    describe('GET', () => {
      // Note that we return the evaluation of `request` here! It evaluates to
      // a promise, so Jest knows to wait until it resolves.
      // See https://jestjs.io/docs/en/asynchronous
      it('responds with 200 status and text/html content type', () => {
        return request(server)
          .get('/')
          .expect('Content-Type', /text\/html/)
          .expect(200);
      });
    });
  });

  describe('/markets', () => {
    describe('GET', () => {
      it('responds with 200 status and application/json content type', () => {
      });

      // For this test, you'll need to inspect the body of the response and
      // ensure it contains the markets list. Check the markets.dev.json file
      // in the dev database to get an idea of what shape you're expecting.
      it('includes markets from "DB" json in body', () => {
      });
    });

    describe('POST', () => {
      it('responds with 201 status and application/json content type', () => {
      });

      // Hint: you should expect 5 fields on this object
      it('responds with the item that was created in the DB', () => {
      });

      it('responds to invalid request with 400 status and error message in body', () => {
      });
    });

    describe('PATCH', () => {
      it('responds with 200 status and application/json content type', () => {
      });

      it('responds with the item that was updated in the DB', () => {
      });

      // This feature is not yet implemented. Follow TDD!
      it('responds to invalid request with 400 status and error message in body', () => {
      });
    });
  });
});
