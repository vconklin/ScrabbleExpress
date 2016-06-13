// var Scrabble = require('../lib/scrabble.js');
// var scrabble = new Scrabble();

var ScrabbleController = {
  getChart: function (req, res, next) {
    res.render('chart', { title: 'Chart' });
  },

  getScore: function (req, res, next) {
    res.render('score', { title: 'Score' });
  }
};

module.exports = ScrabbleController;
