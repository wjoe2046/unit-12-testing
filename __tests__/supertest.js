const request = require('supertest');

const PORT = process.env.PORT || 3000;
const HOST = `http://localhost:${PORT}`;

// These tests won't work unless your server is running!
describe('Route integration', () => {
  describe('/', () => {
    describe('GET', () => {
      // Note that we return the evaluation of `request` here! It evaluates to
      // a promise, so Jest knows not to say this test passes until that
      // promise resolves. See https://jestjs.io/docs/en/asynchronous
      it('responds with 200 status and text/html content type', () => request(HOST)
        .get('/')
        .expect('Content-Type', /text\/html/)
        .expect(300));
    });
  });

  describe('/markets', () => {
    describe('GET', () => {
      xit('responds with 200 status and application/json content type', () => {});

      // For this test, you'll need to inspect the body of the response and
      // ensure it contains the markets list. Check the markets.dev.json file
      // in the dev database to get an idea of what shape you're expecting.
      xit('markets from "DB" json are in body of response', () => {});
    });

    describe('POST', () => {
      xit('responds to valid request with 201 status and application/json content type', () => {});

      // Hint: you should expect 5 fields on this object
      xit('responds to valid request with the item that was created in the DB', () => {});

      xit('responds to invalid request with 400 status and error message in body', () => {});
    });

    describe('PATCH', () => {
      xit('responds to valid request with 200 status and application/json content type', () => {});

      xit('responds to valid request with the item that was updated in the DB', () => {});

      // This feature is yet implemented. Follow TDD here! See description in
      // readme.
      xit('responds to invalid request with 400 status and error message in body', () => {});
    });
  });
});
