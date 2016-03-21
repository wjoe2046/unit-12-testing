/**
* Returns a shuffled version of provided array
*
* @param {Array} arr - array to copy and shuffle
* @return {Array} Shuffled array
*/
function shuffle(arr) {
  const shuffledArray = arr.slice();
  var temp;
  var i;
  var randomIndex;

  for (i = shuffledArray.length - 1; i >= 0; i --) {
    randomIndex = Math.floor(Math.random() * (i + 1));
    temp = shuffledArray[i];
    shuffledArray[i] = shuffledArray[randomIndex];
    shuffledArray[randomIndex] = temp;
  }

  return shuffledArray;
}

/**
* Return a random element in a string
*
* @param {String} str - String to return a random letter from
* @return {String} Random letter from the string
*/
function randomChar(str) {
  return str.charAt(Math.floor(Math.random() * str.length));
}

/**
* Create a gameboard Array from given dice. A gameboard Array consists of a random character from
* each of the 25 shuffled die strings.
*
* @param {Array} diceArray - array of strings, each string representing a die
* @return {Array} Array of single string characters, each representing a die roll
*/
function getRandomGameBoard(diceArray) {
  return shuffle(diceArray).map(die => randomChar(die));
}

/**
* Start a game of Boggle by adding appropriate event listeners and text to the board
*
* @param {Array} dice - Array of stings, each string representing a die for this Boggle game
*/
function startGame(dice) {
  const board = getRandomGameBoard(dice);
  const clickHistory = [];
  var total = 0;

  $('#submitWord').click(() => {
    const word = clickHistoryToString(clickHistory);
    if (word.length < 3) return;

    const score = scoreWord(word);

    clickHistory.length = 0;
    total += score;
    addScoredWordToDom(word, score, total);
    clearBoardSelected();
    updateCurrentWordOnDom(clickHistoryToString(clickHistory));
  });

  $('.square').click(function() {
    clickSquare(this, clickHistory);
  });

  $('.square').each((index, elem) => {
    const $square = $(elem);
    var text = board[index].toUpperCase();
    text = text === 'Q' ? 'Qu' : text;
    $square.text(text);
  });

  $('#solve').click(() => {
    $.ajax({
      type: 'POST',
      url: '/solve',
      data: JSON.stringify({ letters: board.join('') }),
      success: addSolutionToDom,
      contentType: 'application/json',
    });
  });
}

/**
* TODO:
*
* Add the passed in array of words to the DOM somewhere so that the user can see them
*
* @param {Array} data - Array of strings, each string being a word on the current boggle board
*/
function addSolutionToDom(data) {

}

/**
* Given an array of click history, return the word it represents
*
* @param {Array} history - array of DOM elements representing the last squares clicked
*/
function clickHistoryToString(history) {
  return history.map(elem => $(elem).text()).join('').toUpperCase();
}

/**
* If square is playable, toggle its 'selected class' and add/remove the letter from
* currentWord and clickHistory
*/
function clickSquare(elem, clickHistory) {
  const $square = $(elem);

  // Return if square is unplayable
  if (unplayable($square, clickHistory)) return;

  $square.toggleClass('selected');

  if ($square.is(lastClicked(clickHistory))) {
    clickHistory.pop();
  } else {
    clickHistory.push($square);
  }

  updateCurrentWordOnDom(clickHistoryToString(clickHistory));
}

/**
* Return the number of points in boggle that a string is worth
*
* @param {String} word - String to be played in Boggle
* @return {number} number of points the string is worth
*/
function scoreWord(str) {
  if (str.length < 5) return 1;
  else if (str.length === 5) return 2;
  else if (str.length === 6) return 3;
  else if (str.length === 7) return 5;
  else if (str.length === 8) return 11;
  return str.length * 2;
}


/**
* Replace the text in the #currentWord span with the provided string
*
* @param {String} text - the text string to place in the #currentWord span
*/
function updateCurrentWordOnDom(text) {
  $('#currentWord span').text(text);
}

/**
* Update DOM with scored word
*/
function addScoredWordToDom(word, score, total) {
  $('#score tbody').append($(`<tr><td>${word}</td><td>${score}</td></tr>`));
  $('#score tfoot td:nth-child(2)').text(total);
}

/**
* Return whether or not a square is playable
*/
function unplayable($square, clickHistory) {
  if ($square.hasClass('selected') && !$square.is(lastClicked(clickHistory))) return true;

  if (clickHistory.length === 0) return false;

  const thisIndex = $('.square').index($square);
  const lastIndex = $('.square').index(lastClicked(clickHistory));

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

/**
* Return the last item in a given array
*/
function lastClicked(clickHistory) {
  return clickHistory[clickHistory.length - 1];
}

/**
* Remove the selected class from all squares
*/
function clearBoardSelected() {
  $('.selected').each(function() {
    $(this).removeClass('selected');
  });
}

/**
* Once the page loads, start the game with the provided dice.
*/
$(() => {
  const DICE = [
    'aaafrs', 'aaeeee', 'aafirs', 'adennn', 'aeeeem',
    'aeegmu', 'aegmnn', 'afirsy', 'bjkqxz', 'ccenst',
    'ceiilt', 'ceilpt', 'ceipst', 'ddhnot', 'dhhlor',
    'dhlnor', 'dhlnor', 'eiiitt', 'emottt', 'ensssu',
    'fiprsy', 'gorrvw', 'iprrry', 'nootuw', 'ooottu',
  ];

  startGame(DICE);
});
