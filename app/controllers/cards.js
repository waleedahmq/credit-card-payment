const cardService = require('../services/cards');
const helper = require('../helpers');

/**
 * Controllers are used to manage the requests, responses and errors.
 */
module.exports = {
    /**
     * Add card controller managing request, response and error objects
     * @param {request object containing all request properties} req 
     * @param {response object required to send response to client} res 
     * @param {next function can be used to transfer execution to next possible function} next 
     * @returns response to client
     */
    addCard: async (req, res, next) => {
        try {
            const body = { ...req.body, ...req.params, ...req.query };
            await cardService.addCard(body);
            if (!body.rest_call) {
                return helper.render(res, 'success', false, 'Card saved successfully', {});
            }
            return helper.response(res, false, 'Card saved successfully', {});
        } catch (error) {
            console.log(error);
            const statusCode = error.status || 'INTERNAL_SERVER_ERROR';
            if (error.message && (typeof error.message === 'object' || Array.isArray(error.message))) {
                error.message = JSON.stringify(error.message);
            }
            if (!error.data) {
                return helper.render(res, 'error', true, error.message, null, statusCode);
            }
            return helper.response(res, true, error.message, null, statusCode);
        }
    },

    /**
     * Get cards controller managing request, response and error objects
     * @param {request object containing all request properties} req 
     * @param {response object required to send response to client} res 
     * @param {next function can be used to transfer execution to next possible function} next 
     * @returns response to client
     */
    getCards: async (req, res, next) => {
        try {
            const cards = await cardService.getCards();
            return helper.response(res, false, `${cards.length} cards found`, cards);
        } catch (error) {
            const statusCode = error.status || 'INTERNAL_SERVER_ERROR';
            if (error.message && (typeof error.message === 'object' || Array.isArray(error.message))) {
                error.message = JSON.stringify(error.message);
            }
            return helper.response(res, true, error.message, null, statusCode);
        }
    },

    /**
     * Get card by id controller managing request, response and error objects
     * @param {request object containing all request properties} req 
     * @param {response object required to send response to client} res 
     * @param {next function can be used to transfer execution to next possible function} next 
     * @returns response to client
     */
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
