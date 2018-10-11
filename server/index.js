const express = require('express');
const bodyparser = require('body-parser');
const db = require('./db/markets');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static(`${__dirname}/dist`));

app.use(bodyparser.json());

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/markets', (req, res) => {
  const { market } = req.body;
  if (!market) {
    return res.status(422).json({ error: 'No market provided.' });
  }
  const newMarket = db.create({ market });
  res.status(201).json(newMarket);
});

app.get('/games', (req, res) => {
  res.json(db.find());
});

const port = process.env.PORT || 3000;

app.listen(port);
