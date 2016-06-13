var Scrabble = function() {};

Scrabble.prototype.score = function(word) {

  var scoring_chart = {
    "A": 1,
    "B": 3,
    "C": 3,
    "D": 2,
    "E": 1,
    "F": 4,
    "G": 2,
    "H": 4,
    "I": 1,
    "J": 8,
    "K": 5,
    "L": 1,
    "M": 3,
    "N": 1,
    "O": 1,
    "P": 3,
    "Q": 10,
    "R": 1,
    "S": 1,
    "T": 1,
    "U": 1,
    "V": 4,
    "W": 4,
    "X": 8,
    "Y": 4,
    "Z": 10
  };

  // converts input to a string and makes the input case-insensitive
  word = String(word).toUpperCase();

  //catches the first instance of anything that's NOT a letter
  if (/[^a-z]/i.test(word) === true) {
    throw "Word should only contain letters of the English alphabet.";
  } else {
    var total_score = 0;
    for (var letter of word) {
      total_score += scoring_chart[letter]; //the corresponding value for that letter
    };

    //checks to see if any bonus points are applicable
    bonus = this.bonusPoints(word);
    total_score += bonus;

    return total_score;
  };
};

Scrabble.prototype.bonusPoints = function(word) {
  var bonus = 0;

  //if word is 7 letters long, give 50 bonus points
  if (word.length === 7) {
    bonus += 50;
  }

  return bonus;
}

module.exports = Scrabble;
