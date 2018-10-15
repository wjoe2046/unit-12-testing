/* eslint no-unused-vars: 0 */
const path = require('path');
const express = require('express');
const db = require('./db/markets');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, '../dist')));
app.use(express.json());

app.post('/markets', (req, res, next) => {
  const { location, cards } = req.body;
  if (!location || !cards) {
    return next({ code: 400, error: 'Location and cards fields required' });
  }

  const newMarket = db.create({ location, cards });
  res.status(201).json(newMarket);
});

app.patch('/markets/:id', (req, res, next) => {
  const { id } = req.params;
  const market = db.findById(parseInt(id));
  if (!market) {
    return next({ code: 404, error: 'No market to update' });
  }

  const cards = market.cards + req.body.cards;
  if (cards < 0) return next({ code: 400, error: 'Too low!' });
  res.json(db.update({ id, cards }));
});

app.get('/markets', (req, res) => {
  res.json(db.find());
});

app.use(({ code, error }, req, res, next) => {
  res.status(code).json({ error });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
