var util = {};

/**
* Insert score into scores array at correct index and return its index
*
* @param score - Object
* @param highScores - Array
*/
util.insertScore = function(newScore, highScores) {
  return highScores.push(newScore);
};

module.exports = util;
