const request = require('supertest');

const PORT = process.env.PORT || 3000;
const HOST = `http://localhost:${PORT}`;

describe('Route integration', () => {
  describe('/', () => {
    describe('GET', () => {
      it('responds with 200 status and text/html content type', () => request(HOST)
        .get('/')
        .expect('Content-Type', /text\/html/)
        .expect(200));
    });
  });

  describe('/games', () => {
    describe('GET', () => {
      xit('response with 200 status and application/json content type', () => {
      });

      xit('games from appropriate json file in server/db/ are in body of response', () => {
        // You'll need to inspect the body of the response and ensure it
        // contains the games list. Might need to read the games json file in
        // first to make sure the games in the response match the games in the
        // database.
      });
    });

    describe('POST', () => {
      xit('responds to valid request with 200 status and application/json content type', () => {
      });

      xit('responds to a valid request with the item that was created in the DB', () => {
        // Hint: inspect the response body and make sure it contains the
        // winner, createdAt, and id fields.
      });

      xit('responds to invalid request with 400 status and error message in body', () => {
        // This feature is not fully implemented yet. Follow test driven
        // development here! See description in readme. Hint: An invalid
        // request is a POST request in which the POST body does not contain a
        // JSON object with a "winner" key, or if the body contains fields
        // other than "winner"
      });
    });
  });
});
