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
 * @param {Object} market - The new market to be added to the DB
 * @return {Object} the market that was created
 */
db.create = (market) => {
  const newMarket = Object.assign(market, {
    id: marketList.length,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  marketList.push(newMarket);
  db.write();
  return marketList.slice(-1)[0];
};

/**
 * #update - Overwrites existing market with new data.
 *
 * @param {Object} market - The market data to apply, including the id of the
 * market to overwrite
 * @return {Object} the new market record
 */
db.update = (market) => {
  Object.assign(
    marketList[market.id],
    market,
    { updatedAt: new Date().toISOString() },
  );
  db.write();
  return marketList[market.id];
};

/**
 * #find - Returns the entire list of markets from the appropriate
 * markets.env.json file.
 *
 * @return {Array} the list of markets
 */
db.find = () => marketList;

/**
 * #findById - Gets the record with a matching ID. Returns undefined if the
 * record doesn't exist.
 *
 * @param {Number} id - The id of a potential market
 * @return {Object} The matching market
 */
db.findById = id => marketList[id];

/**
 * #drop - Deletes everything from the appropriate markets.env.json file and
 * writes an empty array in its place.
 *
 * @return {boolean} whether or not the drop succeeded
 */
db.drop = () => {
  marketList = [];
  db.write();
  return true;
};

db.write = () => {
  fs.writeFile(writeLocation, JSON.stringify(marketList, null, 2), (err) => {
    if (err) console.error(err);
    console.log('DB updated');
  });
};

db.reset = () => {
  marketList = JSON.parse(fs.readFileSync(writeLocation));
};

module.exports = db;
