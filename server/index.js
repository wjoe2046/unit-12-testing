const path = require('path');
const express = require('express');
const bodyparser = require('body-parser');
const db = require('./db/markets');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static(path.resolve(__dirname, '..', 'dist')));

app.use(bodyparser.json());

app.get('/', (req, res) => {
  res.render('index');
});

function validateBody(prop) {
  return function (req, res, next) {
    if (req.body[prop] === undefined) {
      return res.status(422).json({ error: `${prop} key is required` });
    }
    next();
  };
}

app.post('/markets',
  validateBody('location'),
  validateBody('cards'),
  (req, res) => {
    const { location, cards } = req.body;
    const newMarket = db.create({ location, cards });
    res.status(201).json(newMarket);
  });

app.patch('/markets/:id',
  (req, res) => {
    const { id } = req.params;
    const market = db.findById(parseInt(id));
    const cards = market.cards + req.body.cards;
    if (cards < 0) return res.status(422).json({ error: 'too low!' });
    if (!market) {
      return res.status(404).json({ error: 'No market to update' });
    }
    res.json(db.update({ id, cards }));
  });

app.get('/markets', (req, res) => {
  res.json(db.find());
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));
