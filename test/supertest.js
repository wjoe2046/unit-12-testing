// require('blanket');
const app = require('../index.js');
const request = require('supertest');

/**
* include your assertion library here
*/
const expect = require('expect');
// const expect = require('chai').expect;
// const assert = require('chai').assert;

describe('integration tests for routes', () => {
  describe('/solve', () => {
    // A POST is valid if it contains a JSON encoded object containing the key "letters"
    // with the value being a string of length 25
    it('responds to valid POST request to /solve with json', done => {
      request('http://localhost:3000')
        .post('/solve')
        .type('json')
        .send('{"letters": "aksjdksidkpeldoirkemkdpwl"}')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });

    // TODO: Finish the tests below
    xit('responds to valid POST request with actual solutions from provided puzzle', done => {
      // write test here
    });

    xit('responds to invalid POST request to /scores with 400 error', done => {
      // write test here
    });
  });
});
