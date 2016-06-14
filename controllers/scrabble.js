var Scrabble = require('../lib/scrabble.js');
var scrabble = new Scrabble();

var ScrabbleController = {
  getChart: function (req, res, next) {
    var locals = {};

    locals.chart = scrabble.scoring_chart;

    res.render('chart', { title: 'Scoring Chart', chart: locals.chart });
  },

  getScore: function (req, res, next) {
    res.render('score', { title: 'Score' });
  }
};

module.exports = ScrabbleController;
