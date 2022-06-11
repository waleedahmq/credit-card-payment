const { body } = require('express-validator');

/**
 * This function is being used to define the rules that will be applied during request validation
 * @returns the rules that must be fulfilled for the request to be entertained ahead
 */
const cardRules = () => {
    let rules = [
        body('card_number', 'Please enter 16 digit card number')
            .notEmpty()
            .isLength({ min: 16, max: 16 })
            .trim(),
        body('card_cvv', 'Please enter 3 digit cvv code')
            .notEmpty()
            .isLength({ min: 3, max: 3 })
            .trim(),
        body('card_name', 'Please enter card holder name')
            .notEmpty()
            .trim(),
        body('card_expiry_month', 'Please enter valid expiry having 2 digit expiry month')
            .notEmpty()
            .isLength({ min: 2, max: 2 })
            .custom((value, { req }) => {
                const today = new Date();
                if (parseInt('20' + req.body.card_expiry_year) === today.getFullYear()) {
                    if (parseInt(value) < today.getMonth() + 1) {
                        return false;
                    }
                }

                return true;
            })
            .trim(),
        body('card_expiry_year', 'Please enter valid expiry having 2 digit expiry year')
            .notEmpty()
            .isLength({ min: 2, max: 2 })
            .custom((value, { req }) => {
                const today = new Date();
                if (parseInt('20' + value) < today.getFullYear()) {
                    return false;
                }

                return true;
            })
            .trim(),
    ];

    return rules;
};

module.exports = cardRules;