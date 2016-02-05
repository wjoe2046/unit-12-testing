const apiController = require('../controllers/apiController');

var cache = require('apicache').options({ debug: true }).middleware;

module.exports = (app) => {
  app.get('/api/users', cache('3 minutes'), apiController.getUsers);
};
