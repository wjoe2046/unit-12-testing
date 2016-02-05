const DICE = [
  "aaafrs", "aaeeee", "aafirs", "adennn", "aeeeem",
  "aeegmu", "aegmnn", "afirsy", "bjkqxz", "ccenst",
  "ceiilt", "ceilpt", "ceipst", "ddhnot", "dhhlor",
  "dhlnor", "dhlnor", "eiiitt", "emottt", "ensssu",
  "fiprsy", "gorrvw", "iprrry", "nootuw", "ooottu"
];

var currentWord = [];
var clickHistory = [];
var words = [];
var total = 0;
var board = [];

function shuffle() {
  var shuffledDice = DICE.slice();
  var temp;
  
  for (var i = DICE.length - 1; i >= 0; i --) {
    var randomIndex = Math.floor(Math.random() * (i + 1));    
    temp = shuffledDice[i];
    shuffledDice[i] = shuffledDice[randomIndex];
    shuffledDice[randomIndex] = temp;
  }
  
  return shuffledDice;
}

function rollDie(die) {
  var randomIndex = Math.floor(Math.random() * die.length);
  return die.charAt(randomIndex);
}

function getRandomGameBoard() {
  var dice = shuffle();
  var board = [];
  
  for (var i = 0; i < dice.length; i ++) {
    board.push(rollDie(dice[i]));
  }
  
  return board;
}

function startGame() {
  board = getRandomGameBoard();
  
  activateBoard();
}

function activateBoard() {
  $('#currentWord button').click(submitWord);
  
  $('.square').each(setupSquare);
}

function submitWord(e) {
  if (currentWord.length < 3) return;
  var word = currentWord.join('').toUpperCase();
  words.push(word);
  clickHistory = [];
  currentWord = [];
  
  addScoredWord(word, scoreWord(word));
  updateCurrentWord();
  clearBoard();
}

function setupSquare(index, elem) {
  var $square = $(elem);
  var text = board[index].toUpperCase();
  text = text === 'Q' ? 'Qu' : text;
  $square.text(text);
  
  $square.click(clickSquare);
}

function clickSquare(e) {
  var $square = $(this);
  
  // Return if square is unplayable
  if (unplayable($square)) return;
  
  $square.toggleClass('selected');
  
  if ($square.is(lastClicked())) {
    clickHistory.pop();
    currentWord.pop();
  } else {
    currentWord.push($square.text());
    clickHistory.push($square);
  }
  updateCurrentWord();      
}

function scoreWord(word) {
  if (word.length < 5) return 1;
  else if (word.length === 5) return 2;
  else if (word.length === 6) return 3;
  else if (word.length === 7) return 5;
  else if (word.length === 8) return 11;
  else return word.length * 2;
}

function updateCurrentWord() {
  $('#currentWord span').text(currentWord.join('').toUpperCase());
}

function addScoredWord(word, score) {
  $('#score tbody').append($('<tr><td>' + word + '</td><td>' + score + '</td></tr>'));
  total += score;
  $('#score tfoot td:nth-child(2)').text(total);
}

function unplayable($square) {
  if ($square.hasClass('selected') && !$square.is(lastClicked())) return true;
  
  if (clickHistory.length === 0) return false;
  
  var thisIndex = $('.square').index($square);
  var lastIndex = $('.square').index(lastClicked());
  
  return ((thisIndex !== lastIndex - 1) &&
          (thisIndex !== lastIndex + 1) &&
          (thisIndex !== lastIndex - 5) &&
          (thisIndex !== lastIndex + 5) &&
          (thisIndex !== lastIndex - 4) &&
          (thisIndex !== lastIndex + 4) &&
          (thisIndex !== lastIndex - 6) &&
          (thisIndex !== lastIndex + 6) &&
          (thisIndex !== lastIndex));
}

function lastClicked() {
  return clickHistory[clickHistory.length - 1];
}

function clearBoard() {
  $('.selected').each(function() {
    $(this).removeClass('selected');
  });
}

$(function(){
  startGame();
});
