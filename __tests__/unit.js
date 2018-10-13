// Here we will be unit testing the 3 main database functions from server/db/markets.js
const fs = require('fs');
const path = require('path');
const db = require('../server/db/markets.js');

const testJsonFile = path.resolve(__dirname, '../server/db/markets.test.json');

describe('db unit tests', () => {
  /**
   * Jest runs the "beforeAll" function once, before any tests are executed. If
   * you need to perform an asynchronous operation during a Jest function, then
   * you have two options. One is to return a promise, and Jest will wait until
   * that promise resolves before moving on.
   *
   * The second way is to provide a callback function named "done" (like
   * below). If you provide the callback, then Jest will wait until the "done"
   * callback has been called. Here, we invoke "done" in fs.writeFile's
   * callback function, after writing to the file and then resetting our
   * database model. This way, the tests won't start until the "database" has
   * been reset to an empty Array!
   */
  beforeAll((done) => {
    // Make sure "db" is empty
    fs.writeFile(testJsonFile, JSON.stringify([], null, 2), () => {
      db.reset();
      done();
    });
  });

  /**
   * Like many testing frameworks, in Jest we use the "describe" function to
   * separate our tests into sections. The main purpose here is to make the
   * console output easier to read. Each test inside of a describe block will
   * have its output indented inside of its description.
   *
   * You can place "beforeAll", "beforeEach", "afterAll", and "afterEach"
   * functions inside of "describe" blocks and they will only run for tests
   * inside that describe block. You can even nest describes within describes!
   */
  describe('#create', () => {
    it('should write a valid market to the JSON file', () => {
      const market = { id: 0, cards: 0, location: 'here' };
      db.create(market);
      const marketList = JSON.parse(fs.readFileSync(testJsonFile));
      expect(marketList.length).toEqual(1);
      expect(marketList[0].location).toEqual('here');
    });

    // TODO: Finish unit testing the create function

    xit('should create a second market without overwriting the first', () => {
    });

    xit('should return an error when location field is not provided', () => {
      /**
       *  TODO: Practice test-driven development here. Currently the create
       *  function does not return an error if the location field is not
       *  provided. Follow the TDD approach:
       *    1. Write a test that tests that an error is returned if the
       *    "location" field is not provided
       *    2. Run the tests and make sure your new test fails (since this
       *    feature doesn't exist yet)
       *    3. Add the functionality to #create function in server/db/markets.js
       *    to make your test pass
       */
    });

    xit('should return an error when location field is not provided', () => {
    });

    xit('should add ID field to market', () => {
    });

    xit('should add createdAt field with current time', () => {
      /**
       * Hint: To test this in-depth, try mocking the date with Sinon.js This
       * way you can set a random date, create a new market in the database,
       * and then assert that the market in the database matches the date you
       * set exactly!
       */
    });
  });

  // TODO: Unit test the #find and #drop functions
  xdescribe('#find', () => {
    it('returns list of all markets from the json file', () => {
    });

    it('works if the list of markets is empty', () => {
    });
  });

  xdescribe('#drop', () => {
    it('writes an empty array to the json file', () => {
    });
  });

  /**
   * Once our tests complete, we enter the teardown phase. In general, the
   * teardown phase is for restoring everything to its initial state. Here that
   * means just clearing out our "database."
   */
  afterAll((done) => {
    fs.writeFile(testJsonFile, JSON.stringify([], null, 2), done);
  });
});
