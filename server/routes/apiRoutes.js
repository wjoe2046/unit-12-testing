const movieController = require('../controllers/movieController');

module.exports = (app) => {
  app.get('/api/movies', movieController.getMovies);
};
