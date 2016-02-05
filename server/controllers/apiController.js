const cheerio = require('cheerio');
const request = require('request');
const async = require('async');
const qs = require('querystring');
const faker = require('faker');

// generate fake user set
var users = [];

for (var i = 0; i < 20; i ++) {
  users.push(faker.helpers.userCard());
}

module.exports = {
  getUsers: (req, res) => {
    res.json(users);
  }
};
