const cardService = require('../services/cards')

module.exports = {
    addCard: async (req, res, next) => {
        try {
            const body = { ...req.body, ...req.params, ...req.query };
            await cardService.addCard(body);
            return helper.response(res, false, 'Card saved successfully', {});
        } catch (error) {
            const statusCode = error.status || 'INTERNAL_SERVER_ERROR';
            if (error.message && (typeof error.message === 'object' || Array.isArray(error.message))) {
                error.message = JSON.stringify(error.message);
            }
            return helper.response(res, true, error.message, null, statusCode);
        }
    },

    getCards: async (req, res, next) => {
        try {
            const cards = await cardService.getCards();
            return helper.response(res, false, 'Cards found', cards);
        } catch (error) {
            const statusCode = error.status || 'INTERNAL_SERVER_ERROR';
            if (error.message && (typeof error.message === 'object' || Array.isArray(error.message))) {
                error.message = JSON.stringify(error.message);
            }
            return helper.response(res, true, error.message, null, statusCode);
        }
    },

    getCardById: async (req, res, next) => {
        try {
            const card = await cardService.getCardById(req.params.id);
            return helper.response(res, false, 'Card found', card);
        } catch (error) {
            const statusCode = error.status || 'INTERNAL_SERVER_ERROR';
            if (error.message && (typeof error.message === 'object' || Array.isArray(error.message))) {
                error.message = JSON.stringify(error.message);
            }
            return helper.response(res, true, error.message, null, statusCode);
        }
    }
};
