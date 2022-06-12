const cardProvider = require('../providers/cards');
const helper = require('../helpers');

/**
 * Services are used to apply the processing required before saving objects in database or before returning response to client
 */
const cardService = {
    /**
     * Add card service function applying encryption on some values before saving them in database
     * @param {body consisting of all possible inputs from client} body 
     * @returns newly created object
     */
    addCard: async (body) => {
        if (body.card_number) {
            body.card_hash = helper.hash(body.card_number);
            const card = await cardProvider.findOne({ card_hash: body.card_hash });
            if (card) {
                const error = new Error();
                error.status = 'FORBIDDEN';
                error.message = 'Card number already exist';
                error.data = body.rest_call;
                throw error;
            }

            body.card_number = helper.encrypt(body.card_number);
        }
        if (body.card_cvv) {
            body.card_cvv = helper.encrypt(body.card_cvv);
        }
        return await cardProvider.create(body);
    },

    /**
     * Get cards service function applying decryption on all values needed to be processed
     * @returns list of all cards with selective values
     */
    getCards: async () => {
        let cards = await cardProvider.findAll();
        cards = cards.map(card => {
            card = card.toJSON();
            if (card && card.card_number) {
                card.card_number = helper.decrypt(card.card_number);
            }

            delete card['card_hash'];
            delete card['card_cvv'];
            delete card['card_expiry_month'];
            delete card['card_expiry_year'];
            return card;
        });

        return cards;
    },

    /**
     * Get card by id service function applying decryption on all values needed to be processed.
     * @param {id of the card in database} id 
     * @returns a card object with selective values
     */
    getCardById: async (id) => {
        let card = await cardProvider.findOne({ id: id });
        if (!card) {
            const error = new Error();
            error.status = 'NOT_FOUND';
            error.message = 'Card information not found';
            error.data = body.rest_call;
            throw error;
        }

        card = card.toJSON();
        if (card && card.card_number) {
            card.card_number = helper.decrypt(card.card_number);
        }

        delete card['card_hash'];
        delete card['card_cvv'];
        delete card['card_expiry_month'];
        delete card['card_expiry_year'];
        return card;
    }
};

module.exports = cardService;
