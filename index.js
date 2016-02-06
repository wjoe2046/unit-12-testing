const express = require('express');
const harp = require('harp');
const bodyparser = require('body-parser');

var highScores = require('./scores').sort((a, b) => b.score - a.score);

var app = express();

app.use(express.static(__dirname + "/public"));
app.use(harp.mount(__dirname + "/public"));

app.use(bodyparser.json());

app.get('/scores', (req, res) => {
  // TODO: Fix this route
  res.send('hi');
});

app.post('/score', (req, res) => {
  if (!req.body.name || !req.body.score) return res.status(422).send({ error: 'Invalid data' });
  
  var newScore = {
    name: req.body.name,
    score: req.body.score
  };
  
  return res.send(insertScore(newScore, highScores));
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on port " + port);
});
