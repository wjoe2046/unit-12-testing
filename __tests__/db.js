// Here we will be unit testing the 3 main database functions from server/db/markets.js
const fs = require('fs');
const path = require('path');
const db = require('../server/db/markets.js');

const testJsonFile = path.resolve(__dirname, '../server/db/markets.test.json');

/**
 * Like many testing frameworks, in Jest we use the "describe" function to
 * separate our tests into sections. They make your test outputs readable.
 *
 * You can place "beforeAll", "beforeEach", "afterAll", and "afterEach"
 * functions inside of "describe" blocks and they will only run for tests
 * inside that describe block. You can even nest describes within describes!
 */
describe('db unit tests', () => {
  /**
   * Jest runs the "beforeAll" function once, before any tests are executed.
   * Here, we write to the file and then reset our database model. Then, we
   * invoke the "done" callback to tell Jest our async operations have
   * completed. This way, the tests won't start until the "database" has been
   * reset to an empty Array!
   */
  beforeAll((done) => {
    fs.writeFile(testJsonFile, JSON.stringify([], null, 2), () => {
      db.reset();
      done();
    });
  });

  afterAll((done) => {
    fs.writeFile(testJsonFile, JSON.stringify([], null, 2), done);
  });

  describe('#create', () => {
    it('writes a valid market to the JSON file', () => {
      const market = { cards: 0, location: 'here' };
      db.create(market);
      const marketList = JSON.parse(fs.readFileSync(testJsonFile));
      expect(marketList.length).toEqual(1);
      expect(marketList[0].location).toEqual(market.location);
    });

    // TODO: Finish unit testing the create function

    xit('will create a second market without overwriting the first', () => {
    });

    xit('adds ID field to market', () => {
    });

    xit('adds createdAt and updatedAt fields with current time', () => {
      // To test this in-depth, try mocking the date with lolex. This way you
      // can set a random date, create a new market in the database, and then
      // assert that the market in the DB matches the date you set exactly!
    });

    xit('returns an error when location or cards field is not provided', () => {
      /**
       *  TODO: Practice test-driven development here. Currently the create
       *  function does not return an error if the location field is not
       *  provided. Follow the TDD approach:
       *    1. Write a test describing the desired feature
       *    2. Confirm that your test fails
       *    3. Follow the errors to implement your new functionality
       */
    });
  });

  // TODO: Unit test the #find and #drop functions
  describe('#find', () => {
    xit('returns list of all markets from the json file', () => {
    });

    xit('works if the list of markets is empty', () => {
    });
  });

  describe('#drop', () => {
    xit('writes an empty array to the json file', () => {
    });
  });
});
