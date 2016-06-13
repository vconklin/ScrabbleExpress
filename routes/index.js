var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Scrabble' });
});

/* GET chart page */
router.get('/scrabble/chart', function(req, res, next) {
  res.render('chart', { title: 'Chart'});
});

router.get('/scrabble/score', function(req, res, next) {
  res.render('chart', { title: 'Score'});
});




module.exports = router;
