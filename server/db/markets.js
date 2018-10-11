const fs = require('fs');

let writeLocation;
let marketList;

if (process.env.NODE_ENV === 'test') {
  writeLocation = `${__dirname}/markets.test.json`;
  marketList = require(writeLocation);
} else {
  writeLocation = `${__dirname}/markets.dev.json`;
  marketList = require(writeLocation);
}

const db = {};

/**
 * #create - Adds a unique ID and a createdAt date in the form of an
 * ISO string to the market, and then appends it to the array of
 * markets in the markets.env.json file.
 *
 * @param {Object} market - The new game to be added to the DB
 * @return {Object} the market that was created
 */
db.create = (market) => {
  const newMarket = Object.assign(market, {
    id: marketList.length,
    createdAt: new Date().toISOString(),
  });
  marketList.push(newMarket);
  fs.writeFileSync(writeLocation, JSON.stringify(marketList, null, 2));
  return marketList.slice(-1)[0];
};

/**
 * #find - Returns the entire list of markets from the appropriate
 * markets.env.json file.
 *
 * @return {Array} the list of markets
 */
db.find = () => marketList;

/**
 * #drop - Deletes everything from the appropriate markets.env.json file and
 * writes an empty array in its place.
 *
 * @return {boolean} whether or not the drop succeeded
 */
db.drop = () => {
  marketList = [];
  fs.writeFileSync(writeLocation, JSON.stringify(marketList, null, 2));
  return true;
};

db.reset = () => {
  marketList = JSON.parse(fs.readFileSync(writeLocation));
};

module.exports = db;
