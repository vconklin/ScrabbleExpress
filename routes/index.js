var express = require('express');
var router = express.Router();
var ScrabbleController = require('../controllers/scrabble');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Welcome!' });
});

// I tried putting these in routes/scrabble.js, but it won't work for some reason,
// even when carefully making sure to require and export correctly...

/* GET chart page */
router.get('/scrabble/chart', ScrabbleController.getChart);

/* GET score page */
router.get('/scrabble/score', ScrabbleController.getScoreForm);

/* POST score page */
router.post('/scrabble/score', ScrabbleController.createScore);

/* GET score page for individual word */
router.get('/scrabble/score/:word', ScrabbleController.getScoreOfWord);


module.exports = router;
