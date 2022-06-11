var express = require('express');
var router = express.Router();

const auth = require('../../services/auth');
const rules = require('../../validations/cards');
const cards = require('../../controllers/cards');

// Different restful routes. authentication service is included but is not functional. Validation rules applied and response is being retured from helper
router.route('/').post(auth.authenticate, rules(), helper.validate, cards.addCard);

router.route('/').get(auth.authenticate, cards.getCards);

router.route('/:id').get(auth.authenticate, cards.getCardById);

module.exports = {
  router: router,
  basePath: 'cards',
};
