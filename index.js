const express = require('express');
const harp = require('harp');
const bodyparser = require('body-parser');
const Boggle = require('solve-boggle');

const app = express();

app.use(express.static(`${__dirname}/public`));
app.use(harp.mount(`${__dirname}/public`));

app.use(bodyparser.json());

/**
* Server responds to POST requests to /solve route by sending a JSON array of all of the
* possible words for the provided boggle board
*/
app.post('/solve', (req, res) => {
  if (!req.body.letters || req.body.letters.length !== 25) {
    return res.status(400).send('invalid board');
  }

  const board = new Boggle(req.body.letters);

  return board.solve(words => res.json(words));
});

const port = process.env.PORT || 3000;

app.listen(port);
