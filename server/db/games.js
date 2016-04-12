'use strict';
const fs = require('fs');
let gamesList;
let writeLocation;

if (process.env.NODE_ENV === 'test') {
  writeLocation = `${__dirname}/games.test.json`;
  gamesList = require(writeLocation);
} else {
  writeLocation = `${__dirname}/games.dev.json`;
  gamesList = require(writeLocation);
}

const db = {};

db.create = game => {
  const newGame = Object.assign(game, { createdAt: new Date().toISOString() });
  gamesList.push(newGame);
  fs.writeFileSync(writeLocation, JSON.stringify(gamesList, null, 2));
  return gamesList.slice(-1)[0];
};

db.find = () => gamesList;

db.drop = () => {
  gamesList = [];
  fs.writeFileSync(writeLocation, JSON.stringify(gamesList, null, 2));
  return true;
};

module.exports = db;
