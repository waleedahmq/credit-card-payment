var express = require('express');
var router = express.Router();

const cardService = require('../../services/cards');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('home', { title: 'Online Payment System', heading: 'Credit Card Payments', message: '', page: 'home' });
});

router.get('/list', async function (req, res, next) {
  const cards = await cardService.getCards();
  res.render('list', { title: 'Online Payment System', heading: 'List Credit Cards', data: { cards: cards }, page: 'list' });
});

router.get('/add', function (req, res, next) {
  res.render('add', { title: 'Online Payment System', heading: 'Add Credit Card', page: 'add' });
});

module.exports = router;
