// require('blanket');
var app = require('../index.js');
const request = require('supertest');

/**
* include your assertion library here
*/
var expect = require('expect');
// var expect = require('chai').expect;
// var assert = require('chai').assert;

describe('integration tests for routes', () => {
  
  describe('/scores', () => {
    
    it('responds to GET request to /scores', done => {
      request('http://localhost:3000')
        .get('/scores')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
    
    xit('responds to POST request to /scores', done => {
      // write test here
    });
    
    xit('GET request to /scores only returns 10 top scores', done => {
      // write test here
    });
    
  });
  
});
