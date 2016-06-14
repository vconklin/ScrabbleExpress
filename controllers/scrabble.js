var Scrabble = require('../lib/scrabble.js');
var scrabble = new Scrabble();

var ScrabbleController = {
  getChart: function (req, res, next) {
    var locals = {};

    locals.chart = scrabble.scoring_chart;

    res.render('chart', { title: 'Scoring Chart', chart: locals.chart });
  },

  getScoreForm: function (req, res, next) {
    res.render('score', { title: 'Score A Word' });
  },

  createScore: function (req, res, next) {
    var locals = {};

    locals.word = req.body.word;

    res.render('word_score', { title: locals.word + "'s Score", word: locals.word });
  },

  getScoreOfWord: function (req, res, next) {
    var locals = {};

    locals.word = req.params.word;

    res.render('word_score', { title: locals.word + "'s Score", word: locals.word });
  }
};

module.exports = ScrabbleController;
