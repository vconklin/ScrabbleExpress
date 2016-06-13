var express = require('express');
var router = express.Router();
var ScrabbleController = require('../controllers/scrabble');

/* GET chart page */
router.get('/scrabble/chart', ScrabbleController.getChart);

/* GET score page */
router.get('/scrabble/score', ScrabbleController.getScore);

module.exports = router;
